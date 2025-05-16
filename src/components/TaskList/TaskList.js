// deps
import React from "react";
import { useTask } from "../../Context/TaskContext";

// styles
import './TaskList.css';

function TaskList({ filter }) {
    const { tasks, handleToggleStatus, deleteTask } = useTask();

    const filteredTasks = (tasks || []).filter(task => {
        if (filter === 'all') return true;
        return task.status === filter;
    })

    return (
        <div className="tasks-container">
            {filteredTasks.map((task, key) => (
                <div className="task" key={key}>
                    <div className="task-left" onClick={() => handleToggleStatus(key)}>
                        <input className="task-checkbox" type="checkbox"
                            checked={task.status === 'completed'}
                        />
                        <span className={task.status === 'completed' ? 'task-text completed' : 'task-text'}>{task.task}</span>
                    </div>
                    <button onClick={() => deleteTask(key)} className="task-delete">Delete</button>
                </div>
            ))}
        </div>
    )
};

export default TaskList;
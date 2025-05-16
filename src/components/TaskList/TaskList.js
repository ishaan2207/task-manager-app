// deps
import React from "react";

// styles
import './TaskList.css';

// icons
import DeleteIcon from '@mui/icons-material/Delete';

function TaskList({ tasks, setTasks, filter, handleToggleStatus }) {
    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') return true;
        return task.status === filter;
    })

    const deleteTask = (taskToDelete) => {
        setTasks(prevTasks => prevTasks.filter((_, index) => index !== taskToDelete));
    }

    return (
        <div className="tasks-container">
            {filteredTasks.map((task, key) => (
                <div className="task" key={key}>
                    <span className="task-text">{task.task}</span>
                    <input className="task-completed-check" type="checkbox"
                        onChange={() => handleToggleStatus(key)}
                        checked={task.status === 'completed'}
                    />
                    <span onClick={() => deleteTask(key)}><DeleteIcon /></span>
                </div>
            ))}
        </div>
    )
};

export default TaskList;
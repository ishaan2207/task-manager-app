// deps
import React from "react";

// styles
import './TaskList.css';

// icons
import DeleteIcon from '@mui/icons-material/Delete';

function TaskList({ tasks, setTasks }) {
    const markTaskAsCompleted = (key) => {

    }

    const deleteTask = (key) => {
        setTasks(prevTasks => prevTasks.filter((_, index) => index !== key));
    }

    return (
        <div className="tasks-container">
            {tasks.map((task, key) => (
                <div className="task" key={key}>
                    <div className="task-text">{task.task}</div>
                    <input className="task-completed-check" type="checkbox" onChange={() => markTaskAsCompleted(key)}></input>
                    <div onClick={() => deleteTask(key)}><DeleteIcon /></div>
                </div>
            ))}
        </div>
    )
};

export default TaskList;
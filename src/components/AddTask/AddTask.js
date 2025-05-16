// deps
import React, { useState } from "react";

// styles
import './AddTask.css';

function AddTask({ setTasks }) {
    const [newTask, setNewTask] = useState({})

    const addNewTask = (task) => {
        if (task.task !== '') {
            setTasks(prev => [...prev, task]);
            setNewTask({ task: '', status: 'pending' });
        }
    }

    return (
        <div className="add-task-container">
            <input type="text" placeholder="Add a new task" value={newTask.task} className="add-task-text"
                onChange={(event) => setNewTask({ task: event.target.value, status: 'pending' })}>
            </input>
            <button onClick={() => addNewTask(newTask)} className="add-task-button">Add</button>
        </div>
    )
};

export default AddTask;
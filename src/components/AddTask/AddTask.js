// deps
import React, { useState } from "react";

// styles
import './AddTask.css';

function AddTask({ setTasks }) {
    const [newTask, setNewTask] = useState({})

    const addNewTask = (task) => {
        setTasks(prev => [...prev, task]);
        setNewTask({ task: '', status: 'pending' });
    }

    return (
        <div className="add-task-container">
            <input type="text" placeholder="Add a new task" value={newTask.task}
                onChange={(event) => setNewTask({ task: event.target.value, status: 'pending' })}>
            </input>
            <button onClick={() => addNewTask(newTask)}>Add Task</button>
        </div>
    )
};

export default AddTask;
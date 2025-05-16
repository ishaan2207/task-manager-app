// deps
import React, { useState } from "react";
import { useTask } from "../../Context/TaskContext";

// styles
import './AddTask.css';

function AddTask() {
    const { addNewTask } = useTask();

    const [newTask, setNewTask] = useState({})

    const handleAddTask = (task) => {
        addNewTask(task);
        setNewTask({ task: '', status: 'pending' });
    }

    return (
        <div className="add-task-container">
            <input type="text" placeholder="Add a new task" value={newTask.task} className="add-task-text"
                onChange={(event) => setNewTask({ task: event.target.value, status: 'pending' })}>
            </input>
            <button onClick={() => handleAddTask(newTask)} className="add-task-button">Add</button>
        </div>
    )
};

export default AddTask;
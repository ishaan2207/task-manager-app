// deps
import React, { useState } from "react";

// styles
import './AddTask.css';

function AddTask({ setTasks, showAddTask }) {
    const [newTask, setNewTask] = useState({})

    const addNewTask = (task) => {
        setTasks(prev => [...prev, task]);
        setNewTask({ task: '', status: 'pending' });
    }

    return (
        <div className="add-task-container" style={{ display: showAddTask }}>
            <input type="text" placeholder="Add a new task" value={newTask.task}
                onChange={(event) => setNewTask({ task: event.target.value, completed: false })}>
            </input>
            <button onClick={() => addNewTask(newTask)}>Add Task</button>
        </div>
    )
};

export default AddTask;
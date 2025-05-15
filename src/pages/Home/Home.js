// deps
import React, { useState } from "react";

// styles
import './Home.css';

// components
import TaskList from "../../components/TaskList/TaskList";
import AddTask from "../../components/AddTask/AddTask";

function Home() {
    const [tasks, setTasks] = useState([
        {
            task: 'Clean room',
            completed: false
        },
        {
            task: 'Walk dog',
            completed: true
        }
    ]);

    const [showAddTask, setShowAddTask] = useState('none');

    return (
        <div className="home-container">
            <TaskList tasks={tasks} setTasks={setTasks} />
            <AddTask setTasks={setTasks} showAddTask={showAddTask} />
            <button onClick={() => setShowAddTask('block')}>Add Task</button>
        </div>
    )
};

export default Home;
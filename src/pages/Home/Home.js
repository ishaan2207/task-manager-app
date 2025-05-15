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
            status: 'pending'
        },
        {
            task: 'Walk dog',
            status: 'done'
        }
    ]);

    return (
        <div className="home-container">
            <TaskList tasks={tasks} setTasks={setTasks} />
            <AddTask setTasks={setTasks} />
        </div>
    )
};

export default Home;
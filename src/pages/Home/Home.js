// deps
import React, { useState } from "react";

// styles
import './Home.css';

// components
import TaskList from "../../components/TaskList/TaskList";
import AddTask from "../../components/AddTask/AddTask";
import TasksFilter from "../../components/TasksFilter/TasksFilter";

function Home() {
    const [tasks, setTasks] = useState([
        {
            task: 'Clean room',
            status: 'pending'
        },
        {
            task: 'Walk dog',
            status: 'completed'
        }
    ]);

    const [filter, setFilter] = useState('all');

    const handleToggleStatus = (taskToMark) => {
        setTasks(prevTasks =>
            prevTasks.map((task, key) => key === taskToMark ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' } : task))
    }

    return (
        <div className="home-container">
            <p>Task Manager</p>
            <AddTask setTasks={setTasks} />
            <TaskList tasks={tasks} setTasks={setTasks} filter={filter} handleToggleStatus={handleToggleStatus} />
            <TasksFilter filter={filter} setFilter={setFilter} />
        </div>
    )
};

export default Home;
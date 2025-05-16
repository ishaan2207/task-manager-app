// deps
import React, { useState, useEffect } from "react";

// styles
import './Home.css';

// components
import TaskList from "../../components/TaskList/TaskList";
import AddTask from "../../components/AddTask/AddTask";
import TasksFilter from "../../components/TasksFilter/TasksFilter";

function Home() {

    const localTasks = JSON.parse(localStorage.getItem('tasks'));
    const [tasks, setTasks] = useState(localTasks);

    const [filter, setFilter] = useState('all');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])

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
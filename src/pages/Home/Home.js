// deps
import React, { useState } from "react";

// styles
import './Home.css';

// components
import TaskList from "../../components/TaskList/TaskList";
import AddTask from "../../components/AddTask/AddTask";
import TasksFilter from "../../components/TasksFilter/TasksFilter";

function Home() {

    const [filter, setFilter] = useState('all');

    return (
        <div className="home-container">
            <p className="home-header">Task Manager</p>
            <AddTask />
            <TaskList filter={filter} />
            <TasksFilter filter={filter} setFilter={setFilter} />
        </div>
    )
};

export default Home;
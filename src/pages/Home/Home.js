// deps
import React, { useState } from "react";

// styles
import './Home.css';

// components
import TaskList from "../../components/TaskList/TaskList";
import AddTask from "../../components/AddTask/AddTask";
import TasksFilter from "../../components/TasksFilter/TasksFilter";

// icons
import LightModeIcon from '@mui/icons-material/LightMode';

function Home({ setIsDark }) {

    const [filter, setFilter] = useState('all');

    return (
        <div className="home-container">
            <div className="home-header">
                <p className="header-text">Task Manager</p>
                <span className="toggle-theme-button" onClick={() => setIsDark(prev => !prev)}>
                    <LightModeIcon sx={{
                        fontSize: {
                            xs: 24,
                            sm: 32,
                            lg: 38,
                        },
                    }} />
                </span>
            </div>
            <AddTask />
            <TaskList filter={filter} />
            <TasksFilter filter={filter} setFilter={setFilter} />
        </div>
    )
};

export default Home;
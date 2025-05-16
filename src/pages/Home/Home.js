// deps
import React, { useState } from "react";

// styles
import './Home.css';

// components
import TaskList from "../../components/TaskList/TaskList";
import AddTask from "../../components/AddTask/AddTask";
import TasksFilter from "../../components/TasksFilter/TasksFilter";

// context
import { useTheme } from "../../Context/ThemeContext";

// icons
import LightModeIcon from '@mui/icons-material/LightMode';

function Home() {

    const [filter, setFilter] = useState('all');

    const { toggleTheme } = useTheme();

    return (
        <div className="home-container">
            <div className="home-header">
                <p className="header-text">Task Manager</p>
                <span className="toggle-theme-button" onClick={toggleTheme}>
                    <LightModeIcon />
                </span>
            </div>
            <AddTask />
            <TaskList filter={filter} />
            <TasksFilter filter={filter} setFilter={setFilter} />
        </div>
    )
};

export default Home;
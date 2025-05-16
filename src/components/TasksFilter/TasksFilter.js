// deps
import React from "react";

// styles
import './TasksFilter.css';

function TasksFilter({ filter, setFilter }) {

    return (
        <div className="tasks-filter-container">
            <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
            <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
            <button onClick={() => setFilter('pending')} className={filter === 'pending' ? 'active' : ''}>Pending</button>
        </div>
    )
};

export default TasksFilter;
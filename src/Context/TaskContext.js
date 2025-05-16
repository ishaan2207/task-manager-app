// deps
import React, { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {

    const localTasks = JSON.parse(localStorage.getItem('tasks'));
    const [tasks, setTasks] = useState(localTasks);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleToggleStatus = (taskToMark) => {
        setTasks(prevTasks =>
            prevTasks.map((task, key) => key === taskToMark ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' } : task))
    }

    const deleteTask = (taskToDelete) => {
        setTasks(prevTasks => prevTasks.filter((_, index) => index !== taskToDelete));
    }

    const addNewTask = (task) => {
        if (task.task !== '') {
            setTasks(prev => [...prev, task]);
        }
    }

    return (
        <TaskContext.Provider value={{ tasks, handleToggleStatus, deleteTask, addNewTask }}>
            {children}
        </TaskContext.Provider>
    )
};

const useTask = () => {
    return useContext(TaskContext);
}

export { TaskProvider, useTask };
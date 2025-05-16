// deps
import React, { createContext, useContext } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {

    const { tasks, setTasks } = useLocalStorage();

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
};

export { TaskProvider, useTask };
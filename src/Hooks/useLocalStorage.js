// deps 
import { useEffect, useState } from "react";

function useLocalStorage() {
    const localTasks = JSON.parse(localStorage.getItem('tasks'));
    const [tasks, setTasks] = useState(localTasks);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return { tasks, setTasks };
};

export default useLocalStorage;
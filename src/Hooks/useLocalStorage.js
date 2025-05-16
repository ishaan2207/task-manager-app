// deps 
import { useEffect, useState } from "react";

function useLocalStorage() {
    const localTasks = JSON.parse(localStorage.getItem('tasks'));
    const [tasks, setTasks] = useState(localTasks);

    const [isDark, setIsDark] = useState(() => {
        const localTheme = JSON.parse(localStorage.getItem('theme'));
        return localTheme ? localTheme : true;
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        localStorage.setItem('theme', JSON.stringify(isDark));
    }, [tasks, isDark]);

    return { tasks, setTasks, isDark, setIsDark };
};

export default useLocalStorage;
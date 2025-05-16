// deps 
import { useEffect, useState } from "react";

function useTheme() {

    const [isDark, setIsDark] = useState(() => {
        const localTheme = JSON.parse(localStorage.getItem('theme'));
        return localTheme !== null ? localTheme : true;
    });

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(isDark));
    }, [isDark]);

    return { isDark, setIsDark };
};

export default useTheme;
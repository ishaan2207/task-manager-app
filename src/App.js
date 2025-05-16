// styles
import './App.css';

// context
import { TaskProvider } from './Context/TaskContext';
import useTheme from './Hooks/useTheme';

// pages
import Home from './pages/Home/Home';

function App() {
  const { isDark, setIsDark } = useTheme();

  return (
    <div className="App" data-theme={isDark ? 'dark' : 'light'}>
      <TaskProvider>
        <Home setIsDark={setIsDark} />
      </TaskProvider>
    </div>
  );
}

export default App;

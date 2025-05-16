// styles
import './App.css';

// context
import { TaskProvider } from './Context/TaskContext';
import { ThemeProvider, useTheme } from './Context/ThemeContext';

// pages
import Home from './pages/Home/Home';

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div className="App" data-theme={isDark ? 'dark' : 'light'}>
      <TaskProvider>
        <Home />
      </TaskProvider>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App;

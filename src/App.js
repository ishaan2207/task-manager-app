// deps
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
    <BrowserRouter>
      <div className="App" data-theme={isDark ? 'dark' : 'light'}>
        <TaskProvider>
          <Routes>
            <Route path='/' element={<Home setIsDark={setIsDark} />} />
          </Routes>
        </TaskProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

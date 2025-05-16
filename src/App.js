// styles
import './App.css';
import { TaskProvider } from './Context/TaskContext';

// pages
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <Home />
      </TaskProvider>
    </div>
  );
}

export default App;

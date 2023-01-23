import './App.css';
import { NavBar } from './components/navbar';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <TaskList/>
    </div>
  );
}

export default App;

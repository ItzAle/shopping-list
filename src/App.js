import "./App.css";
import { NavBar } from "./components/navbar";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="tasklist">
        <TaskList />
      </div>
    </div>
  );
}

export default App;

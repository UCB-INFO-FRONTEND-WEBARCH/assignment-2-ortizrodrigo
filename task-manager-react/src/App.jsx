import "./App.css";
import { useState } from "react";
import { starterTasks } from "./data/starter-tasks";
import { Header, TaskList, TaskForm } from "./components";

function App() {
  const [tasks, setTasks] = useState(starterTasks);
  const [filterMode, setFilterMode] = useState("all");

  const addTask = (text) => {
    const newTask = {
      id: Date.now().toString(),
      text,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) return { ...task, completed: !task.completed };
        return task;
      })
    );
  };

  const filter = (task) => {
    if (filterMode === "all") return true;
    if (filterMode === "active") return !task.completed;
    if (filterMode === "completed") return task.completed;
    return false;
  };

  const filteredTasks = tasks.filter(filter);

  return (
    <>
      <Header tasks={filteredTasks} />
      <div className="container">
        <section className="left-navigation-section">
          <h1>TODO</h1>
        </section>
        <section className="main-content-section">
          <TaskForm onAddTask={addTask} />
          <TaskList
            tasks={filteredTasks}
            filterMode={filterMode}
            onToggle={toggleTask}
            setFilterMode={setFilterMode}
            onDelete={deleteTask}
          />
        </section>
      </div>
    </>
  );
}

export default App;

import TaskItem from "./TaskItem";

function TaskList({ tasks, filterMode, onToggle, setFilterMode, onDelete }) {
  return (
    <main>
      <div className="filters">
        <button
          className={`filter ${filterMode === "all" ? "active" : ""}`}
          onClick={() => setFilterMode("all")}
        >
          All
        </button>
        <button
          className={`filter ${filterMode === "active" ? "active" : ""}`}
          onClick={() => setFilterMode("active")}
        >
          Active
        </button>
        <button
          className={`filter ${filterMode === "completed" ? "active" : ""}`}
          onClick={() => setFilterMode("completed")}
        >
          Completed
        </button>
      </div>

      <h1>Inbox</h1>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <TaskItem task={task} key={task.id} onToggle={onToggle} onDelete={onDelete} />
          ))}
        </ul>
      ) : (
        <p>{`There are no ${filterMode === "all" ? "" : filterMode} tasks`}</p>
      )}
    </main>
  );
}

export default TaskList;

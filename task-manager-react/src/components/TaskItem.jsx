function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-list-item">
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.text}</span>
      <button className="task-item-delete" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;

import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (trimmedText === "") return;
    onAddTask(trimmedText);
    setText("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-form-input"
        placeholder="Enter new task"
        value={text}
        onChange={(e) => setText(e.target.value.trimStart())}
        required
      />
      <button type="submit" className="task-form-submit">
        Add Item
      </button>
    </form>
  );
}

export default TaskForm;

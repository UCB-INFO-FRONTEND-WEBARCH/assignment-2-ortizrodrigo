function TaskCounter({ tasks }) {
  return <div>{`${tasks.filter((task) => task.completed).length} / ${tasks.length}`}</div>;
}

export default TaskCounter;

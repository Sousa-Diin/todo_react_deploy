const ItemTask = ( {task, name, handleRemoveItemTaskList} ) => {
  return <div className="task-item">
    <p> { task } </p>
    <button onClick={() => handleRemoveItemTaskList(task)}> {name} </button>
  </div>
}

export default ItemTask;
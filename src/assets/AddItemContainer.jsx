 const  AddItemContainer = ({handleAddItemTaskList}) => {
  let newTask = '';
  return <>
    <h2>Adição de tarefas</h2>
    <div className="task-item">
      <input type="text" id='newTask' onChange={(evt) => 
        { newTask = evt.target.value;
          
        }
        } placeholder='Digite aqui uma nova tarefa'></input>
      <button onClick={() => {
        if (newTask !== ''){
          handleAddItemTaskList(newTask);
        };
        
      }}> Adicionar</button>
    </div>
  </>
}

export default AddItemContainer;
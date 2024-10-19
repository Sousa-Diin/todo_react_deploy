import { useState } from 'react';
import './App.css';
import ItemContainer from './assets/ItemContainer'; 
import AddItemContainer from './assets/AddItemContainer';

function App() {
  const [taskList, setTaskList] = useState([]);

  const handleRemoveItemTaskList = (item) => {
   const newList = [...taskList];
   const itemIndex = newList.indexOf(item);
   newList.splice(itemIndex, 1);
   setTaskList(newList);
  }

  const handleAddItemTaskList = (item) => {
    //const item = document.getElementById('newTask').value; 
    const newList = [item,...taskList];
    setTaskList(newList);
    document.getElementById('newTask').value = "";
  }

 return(
  <>
    <h1>Minha lista de tarefas do dia !</h1>
    <AddItemContainer handleAddItemTaskList={handleAddItemTaskList} />
    <ItemContainer tasklist={taskList} handleRemoveItemTaskList={handleRemoveItemTaskList}/>
  </>
 );
}

export default App;

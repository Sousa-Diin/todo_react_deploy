import ItemTask from "./ItemTask";

const ItemContainer = ({tasklist, handleRemoveItemTaskList}) => {
  
  return ( 
    <>
      {tasklist.map( (task, idx) =>
        <ul>        
          <ItemTask 
            task={task} 
            name={'Feito'} 
            handleRemoveItemTaskList={handleRemoveItemTaskList}
            key={`task-item-${idx}`}
          />
        </ul>  
         )} 
    </>
  );
};

export default ItemContainer;
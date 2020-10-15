import React ,{Fragment, useEffect,useState}from 'react';

import styles from './styles.module.sass';

function TodoItem(props) {
  const[isedit,setIsedit]=useState(false);
  const[todo,setToDo] = useState(props.todo)

useEffect(() => {
  setToDo(props.todo)
}, [props])
// function to update state
function handleUpdate(event) {
  const task = event.target.value;
  setToDo(
    {todoname:task,complete:todo.complete}
  );      
}
// function to update todo
function handleUpdateSubmit(event) {
  event.preventDefault();
  props.handleEditSubmit(props.index,todo);
  toggleToDo();

}
function toggleToDo() {
  const editState= isedit ;
  setIsedit(! editState);
}
//function to complete todo
function completeToDo(event) {
  setToDo({
    todoname:todo.todoname,
    complete:true
  })
  props.handleCompleteTodo(props.index)
}
  return (
    <Fragment>
    { isedit == false?
      
    <div className={styles.card}>
      {
       todo.complete== true? 
      <Fragment>
        <h2 style={{ textDecoration:"line-through"  }}
        className={styles.title}>{todo.todoname}</h2>
        <button className={styles.completeBtn}  disabled={true}>Complete</button>
        <button  className={styles.updateBtn}  disabled={true} >Update</button>
      </Fragment>:
      <Fragment>        
        <h2  className={styles.title}>{todo.todoname}</h2>
        <button className={styles.completeBtn} onClick={() =>completeToDo()}>Complete</button>
        <button   className={styles.updateBtn} onClick={() => toggleToDo()}>Update</button>
      </Fragment>
}     
      <button onClick={() => props.removeToDo(props.index)} className={styles.deleteBtn}>Delete</button>
    </div>: 
    <div className={styles.card}>
    <form onSubmit={handleUpdateSubmit}>
          <div className={styles.formdiv}>             
             <input type="text" value={todo.todoname} required  className={styles.input} onChange={handleUpdate}/>          
             <button className={styles.update} >Update</button>
              </div>
          </form>
    
    </div>
}
   </Fragment>
  );
  }

export default TodoItem;

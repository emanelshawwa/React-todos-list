import React from 'react';
import TodoItem from '../TodoItem';

function TodoList(props) {
  const todos = props.todosList.map((todo, index) => {
    return(       
      <TodoItem   todo={todo} index={index} key={index} removeToDo={props.removeToDo} handleEditSubmit={props.handleEditSubmit}  handleCompleteTodo={props.handleCompleteTodo}/>    
     )
  })
  return (
    <div>
     {todos}
    </div>
  );
}

export default TodoList;

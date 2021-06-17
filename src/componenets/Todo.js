import React from "react";

const Todo = ({todo,todos,settodolist}) => {

   const deletehandler = (e)=> { 
        settodolist(todos.filter((ele)=>ele.id !== todo.id))
   }
   
   const completeHandler = ()=> {
       settodolist(todos.map((item)=> {
           if(item.id === todo.id)
           {
               return {
                   ...item, completed: !item.completed
               }
           }
           return item; 
       }))
   }

    return (<div className="todo">
        <li className={`todo-item ${ todo.completed ? "completed":''}`}>{todo.text}</li>
        <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
        <button onClick={deletehandler} className="trash-btn"><i className="fas fa-trash"></i></button>
    </div>  );
}
 
export default Todo;
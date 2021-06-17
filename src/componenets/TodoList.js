import React from "react"
import Todo from './Todo'

const TodoList = ({filteredtodos,todos,settodolist}) => {
    return ( <div className="todo-container">
    <ul className="todo-list">
        {
        filteredtodos.map((todo)=> (
            <Todo key={todo.id}  todo={todo}  todos={todos} settodolist={settodolist}/>
        ))}
    </ul>
  </div>  );
}
 
export default TodoList
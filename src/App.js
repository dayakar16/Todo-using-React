import React,{useState,useEffect} from 'react';
import './App.css';
import Form from './componenets/Form';
import TodoList from './componenets/TodoList';

function App() {
  const [inputText,setinputText] = useState('');
  const [todos,settodolist] = useState([]);
  const [status,setStatus] = useState('All');
  const [filteredtodos,setfilteredtodos] = useState([])

  useEffect(()=> {
    statusupdate();
    savetolocal();
    getlocal();
  },[todos,status]);
  

  const statusupdate = ()=> {
    switch(status){
      case "completed":
        setfilteredtodos(todos.filter(todo=> todo.completed === true))
        break;
      case "uncompleted":
          setfilteredtodos(todos.filter(todo=> todo.completed === false))
          break;
      default: 
        setfilteredtodos(todos);
        break;
    }
  }

const savetolocal = ()=> {
    localStorage.setItem("todos",JSON.stringify(todos));
}

const getlocal = ()=> {
  if(localStorage.getItem("todos") != null)
  {
     let local =  JSON.parse(localStorage.getItem('todos'));
     console.log(local);
  }
}

  return (
    <div className="App">
      <header>
      <h1>Daya's to do list</h1>
      </header>
      <Form setStatus={setStatus} todos={todos} settodolist={settodolist} inputText={inputText} setinputText={setinputText}/>
      <TodoList filteredtodos={filteredtodos} todos={todos} settodolist={settodolist} />
    </div>
  );
}

export default App;

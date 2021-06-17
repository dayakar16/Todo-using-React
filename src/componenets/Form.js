import React from "react"


const Form = ({setStatus,todos,settodolist,inputText,setinputText}) => {

      const inputTextHandler = (e) => { 
         // console.log(e.target.value)
          setinputText(e.target.value);
      };
      const submithandler = (e)=> {
              e.preventDefault();
            settodolist([...todos,{text:inputText,completed:false,id:Math.random()*100}]);
            setinputText("")
           
      };
    
      const statushandler = (e)=> {
          setStatus(e.target.value)
      }
       
    return (<form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submithandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statushandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>  );
}

 
export default Form;
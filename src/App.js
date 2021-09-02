import './App.css';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import {useState,useEffect} from 'react'
import  {db}  from './firebase';
import firebase from 'firebase';
import TodoListItem from './Todo';

function App() {

  const [todos,setTodos]=useState([])

  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  function getTodos(){
    db.collection("todos").onSnapshot(function(querySnapshot){
         setTodos(
          querySnapshot.docs.map((doc) => ({
            id:doc.id,
            todo: doc.data().todo,
            inprogress:doc.data().is_in_progress
          }))
         )
    })
  }

 function addTodo(e) {
   e.preventDefault()

   db.collection("todos").add({
    is_in_progress:false,
    timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    todo:todoInput
   })
  setTodoInput("")
   
 }



  return (
   <div className="main-container">
    <div className="App">
    <h1 className="heading"> Todo List</h1>
      
       <form >

    <TextField 
    className="text-field"
     id="standard"
    onChange={(e)=>{
      setTodoInput(e.target.value);
    }}
     value={todoInput}
     label="Today's task" />
     <Button style={{display:"none"}} 
     type="submit" variant="contained" 
     onClick={addTodo} >Default</Button>
    

    </form>

    <div className="listContainer">

    {todos.map((todo) => (
     <TodoListItem todo={todo.todo}
      inprogress={todo.inprogress}
       id={todo.id} />
    ))}

</div>

    </div>
    </div>  
    
  );
}

export default App;

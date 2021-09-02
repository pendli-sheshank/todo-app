import './Todo.css'

import React from 'react'
import { Button, ListItem, ListItemText } from '@material-ui/core'
import { db } from './firebase'

function TodoListItem({todo, inprogress,id}) {

function toggleInProgress(){
    db.collection("todos").doc(id).update({
        is_in_progress: !inprogress
    })
}

function deleteTodo(){
    db.collection("todos").doc(id).delete()
}

    return (
        <div className="list-item-style">
           <ListItem >
               <ListItemText className="listText" primary={todo} secondary={inprogress ? "In progess" : "Completed"} />
           </ListItem>

        <Button className="btn" onClick={toggleInProgress} >{inprogress ? "Done" : "UNDONE"}</Button>
        <Button className="delete" onClick={deleteTodo} >X</Button>

        </div>
    )
}

export default TodoListItem

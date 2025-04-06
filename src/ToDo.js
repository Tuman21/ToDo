import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ToDoList (){
    const [todos, setTodos] = useState(['Todo 1', 'Todo 2', 'Todo 3']);
    const [newTodo, setNewTodo] = useState('');

    function handleChange(event) {
        setNewTodo(event.target.value);
    }

    function addToDo(){

    }

    function removeToDo(index){

    }

    function moveToDoUp(index){

    }

    function moveToDoDown(index){

    }

    return(
        <div className='TodoList'>

            <h1>To Do List</h1>

            <div>
                <input 
                type= "text"
                placeholder='Add new Todo'
                value={newTodo}
                onChange={handleChange}/>
                <button
                className='addButton btn btn-primary'
                onClick={addToDo}>
                Add
                </button>
                
            </div>
            <ol>
                {todos.map((todo, index) => 
                <li key={index}>
                    <span className='text'>
                        {todo}
                    </span>
                    <button
                    className='delete-button'
                    onClick={() => removeToDo(index)}>
                        Delete
                    </button>
                    <button 
                    className='move-button'
                    onClick={() => moveToDoUp(index)}>
                        MoveUp
                    </button>
                    <button 
                    className='move-button'
                    onClick={() => moveToDoDown(index)}>
                        MoveDown
                    </button>
                </li>
    )}
            </ol>


        </div> 
    )

}
export default ToDoList;
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

        if(newTodo.trim() !== ''){
            setTodos( t => [...t, newTodo]);
            setNewTodo('');
        }
    }

    function removeToDo(index){
        const updatedTodos = todos.filter((element, i) => i !== index);
        setTodos(updatedTodos);


    }

    function moveToDoUp(index){
        if(index > 0){
            const updatedTodos = [...todos];
            const temp = updatedTodos[index - 1];
            updatedTodos[index - 1] = updatedTodos[index];
            updatedTodos[index] = temp;
            setTodos(updatedTodos);
        }

    }

    function moveToDoDown(index){

        if(index < todos.length - 1){
            const updatedTodos = [...todos];
            const temp = updatedTodos[index + 1];
            updatedTodos[index + 1] = updatedTodos[index];
            updatedTodos[index] = temp;
            setTodos(updatedTodos);
        }

    }

    function CompleteToDo(index){
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
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
                    className='move-button'
                    onClick={() => moveToDoUp(index)}>
                        ☝️
                    </button>
                    <button 
                    className='move-button'
                    onClick={() => moveToDoDown(index)}>
                        👇
                    </button>
                    <button
                    className='delete-button'
                    onClick={() => removeToDo(index)}>
                        ❌
                    </button>
                    <button 
                    className='Complete-button'
                    onClick={() => moveToDoDown(index)}>
                        ✔️
                    </button>
                </li>
    )}
            </ol>


        </div> 
    )

}
export default ToDoList;
import { useState } from "react";

export default function TodoList() {
    let [todos, setTodos] = useState(["sample Task"]);
    let [newTodo, setNewTodo] = useState("");
    
    let addNewTask = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    return (
        <div >
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            <br /><br /> 
            <button className="btn" onClick={addNewTask}>Add Task</button>

            <hr></hr>
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li>{todo}</li>
                ))}
            </ul>
        </div>
    );
}
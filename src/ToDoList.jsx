import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  // State to manage the list of todos and the new todo input value
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  // Function to add a new task to the todo list
  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...todos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  // Function to update the new todo input value
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  // Function to delete a todo by its ID
  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodo) => prevTodo.id !== id));
  };

  // Function to mark all todos as done
  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  // Function to mark a specific todo as done by its ID
  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="main">
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <button className="btn" onClick={addNewTask}>
        Add Task
      </button>

      <h4>Tasks Todo</h4>

      <ul>
        {/* Mapping over todos to display each todo */}
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* Styling the task based on whether it is done or not */}
            <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
              {todo.task}
            </span>

            {/*icons to delete and mark a task as done */}
            &nbsp;&nbsp;&nbsp;
            <i 
              className="fa-regular fa-trash-can"
              onClick={() => deleteTodo(todo.id)}
              id="icon"
            >
              &nbsp;&nbsp;<span>Delete</span>
            </i>
            <i
              className="fa-regular fa-square-check"
              onClick={() => markAsDone(todo.id)}
              id="icon"
            >
              &nbsp;&nbsp;<span>Task Completed</span>
            </i>
          </li>
        ))}
      </ul>
      <br></br>

      {/* Button to mark all tasks as done */}
      <button className="btns" onClick={markAllDone}>
        <i className="fa-regular fa-square-check" id="icons">
          &nbsp;&nbsp;<span>All Task Completed</span>
        </i>
      </button>
    </div>
  );
}

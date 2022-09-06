import React, {Component, useState} from 'react';
import './App.css';
import List from './List.jsx';

const App = () => {
  const [todos, setTodos] = useState(['js공부']);
  const [newTodo, setNewTodo] = useState();

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  }

  return (
    <>
    <h1>todo app</h1>


    <form action="">
      <input type="text" name="" onChange={changeInputData} />
      <button onClick={addTodo}>할일 추가</button>
    </form>

    <List todos={todos}/>
    </>
    
  );
}

export default App;

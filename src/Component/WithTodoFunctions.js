import React, { useState } from 'react';

const WithTodoFunctions = (WrappedComponent) => {
  const WithTodoFunctions = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
      if (newTodo.trim() !== '') {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setNewTodo('');
      }
    };

    const completeTodo = (index) => {
      setTodos((prevTodos) => {
        const updatedTodos = [...prevTodos];
        updatedTodos.splice(index, 1);
        return updatedTodos;
      });
    };

    return (
      <WrappedComponent
        todos={todos}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        addTodo={addTodo}
        completeTodo={completeTodo}
      />
    );
  };

  return WithTodoFunctions;
};


export default WithTodoFunctions;

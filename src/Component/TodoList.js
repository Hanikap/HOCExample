import React from 'react';
import WithTodoFunctions from './WithTodoFunctions';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = ({ todos, newTodo, setNewTodo, addTodo, completeTodo }) => {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} onComplete={() => completeTodo(index)} />
        ))}
      </ul>
    </div>
  );
};

export default WithTodoFunctions(TodoList);

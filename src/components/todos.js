import React from 'react';
import { useStore, useActions } from 'easy-peasy';
import Todo from './todo';
import AddTodo from './add-todo';

function Todos() {
  const todos = useStore(state => state.todos.items);
  const toggle = useActions(actions => actions.todos.toggle);
  const todosList = Object.values(todos);
  return (
    <>
      {todosList.map(todo => (
        <Todo key={todo.id} todo={todo} toggle={toggle} />
      ))}
      <AddTodo />
    </>
  );
}

export default Todos;

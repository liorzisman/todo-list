import React = require('react');
import Todo, { TodoProps } from './todo'


interface TodoListProps {
  todos: Array<TodoProps>;
  onTodoClick: React.EventHandler<any>;
}

const TodoList = ({ todos, onTodoClick }: TodoListProps) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

export default TodoList;
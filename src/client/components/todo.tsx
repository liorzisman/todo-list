import React = require('react');

export interface TodoProps {
  onClick: React.EventHandler<any>;
  completed: boolean;
  text: string;
  id: string;
}

const Todo = ({ onClick, completed, text }: TodoProps) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
);



export default Todo;
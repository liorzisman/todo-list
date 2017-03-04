import React = require('react');

interface LinkProps {
  active: boolean;
  children: HTMLElement;
  onClick: Function;
}


const Link = ({ active, children, onClick }: LinkProps) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault();
         onClick();
       }}
    >
      {children}
    </a>
  )
};

export default Link;
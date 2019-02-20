import React from 'react';
import PropTypes from "prop-types";
import { link } from 'fs';

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
  {text}
  </li>
)
 
export default Todo;
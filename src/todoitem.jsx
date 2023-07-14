

import * as React from 'react'
 const TodoItem = (props) => 
 <li onClick={props.onClick}>{props.item.text}</li>

 export default TodoItem
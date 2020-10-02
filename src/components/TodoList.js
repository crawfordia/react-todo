import React from 'react';

const Todo = ({ id, body, done, onToggleDone, onDelete }) => {
    return <li>
        <p>{body}</p>
        <input 
            type="checkbox"
            checked={done}
            onChange={() => onToggleDone(id)}>
        </input>
        <button
            type="button"
            onClick={() => onDelete(id)}>
        Delete
        </button>
    </li>
}

export default ({ todos, onToggleDone, onDelete }) => {
    return <ul>
        {todos.map((todo) => {
            return <Todo 
                key={todo.id} 
                onToggleDone={onToggleDone}
                onDelete={onDelete}
                {...todo} />
        })}
    </ul>
}
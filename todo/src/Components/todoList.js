import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';


const TodoList = ({ todos, completed, toggletodo }) => {
    let className = 'toggle';
    if(todos.completed === true){
        className += 'toggle-line';
    } else {
        className += 'toggle-none';
    }
    const todoItems =  todos.map(todo => (
        <li key={todo.id} toggletodo={className}>
            <span className='todo-text'>{todo.value}</span>
        </li>
    ));

    return (
        <ol>
            {todoItems}
        </ol>
    );
}

TodoList.propTypes ={
    todos: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            value: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        },
    )).isRequired,
};

export default TodoList;
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TodoList from './Components/todoList';
import actions from './actions';
import AddTodo from "./Components/addTodo";
import './index.css';


export const App = ({ submitTodo, todos }) => (
         <div>
           <h1 className="z-depth-2">
             <i class="material-icons">filter_vintage</i>
             Todo List
             <i class="material-icons">filter_vintage</i>
           </h1>
           <AddTodo submitTodo={submitTodo} />
           <TodoList todos={todos} />
         </div>
       );

App.propTypes = {
    submitTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
    submitTodo: (text) => {
        if(text) {
            dispatch(actions.submitTodo(text));
        }
    },
});

export default connect(mapStateToProps, mapDispatchToProps) (App);
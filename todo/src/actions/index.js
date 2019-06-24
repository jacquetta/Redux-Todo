import types from '../constants';

let todoId = 0;

const nextId = () => {
    todoId += 1;
    return todoId;
}

const actions = {
    submitTodo(value){
        return {
            type: types.SUBMIT_TODO,
            id: nextId(),
            value,
        };
    },
};

export default actions;
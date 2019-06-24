import types from '../constants';

export const initialState = {
    todos: [],
    
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case types.SUBMIT_TODO:
        return {
            ...state,
            todos: [
                ...state.todos,
                {
                    id: action.id,
                    value: action.value,
                    completed: false
                },
            ],
        };

        case types.TOGGLE_TODO: 
        return state.map(todo => (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )

        default:
        return state;
     }
};

export default reducer;
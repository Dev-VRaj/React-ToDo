import { ADD_TODO, REMOVE_TODO } from "./action.types";

const TodoReducer = (state, action) => { // action is stored in the dispatch
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload) // payload is also stored in dispatch
        
        default:
            break;
    }
}

export default TodoReducer;
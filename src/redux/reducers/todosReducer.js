import { actionTypes } from "@actions/types";


const initialState = { todos: [], searchedList: [] };
// import { ADD_TODO, INITIALS_TODOS } from "@actions/types";
/* const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				content: action.payload,
			};
		case INITIALS_TODOS:
			return action.payload;
		default:
			return state;
	}
}; */

const reducerObject = (state, payload) => ({
	[actionTypes.ADD_TODO]: { todos: [...state.todos, payload] },
	[actionTypes.INITIALS_TODOS]: { todos: payload },
	[actionTypes.GET_SEARCH]: { todos: payload },
});

const todosReducer = (state = initialState, action) => {
	return reducerObject(state, action.payload)[action.type] || state;
};

export { todosReducer };
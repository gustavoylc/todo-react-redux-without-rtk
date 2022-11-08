import { actionTypes } from "@actions/types";


const initialState = { loading: false };

const reducerObject = (state, payload) => ({
	[actionTypes.SET_LOADING]: { ...state, loading: payload },
});

const uiTodosReducer = (state = initialState, action) => {
	return reducerObject(state, action.payload)[action.type] || state;
};

export { uiTodosReducer };
import { actionTypes } from "@actions/types";



// import { ADD_TODO, EDIT_TODO, INITIALS_TODOS, REMOVE_TODO } from "@actions/types";
import { createTodo, getSearch as getSearchService, getTodoList } from "@services/todos";


export const addTodo = (title) => async (dispatch) => {
	const newTodo = await createTodo(title);

	dispatch({
		type: actionTypes.ADD_TODO,
		payload: newTodo,
	});
};

export const editTodo = (payload) => {
	return {
		type: actionTypes.EDIT_TODO,
		payload,
	};
};

export const removeTodo = (payload) => {
	return {
		type: actionTypes.REMOVE_TODO,
		payload,
	};
};
export const setLoading = (payload) => {
	return {
		type: actionTypes.SET_LOADING,
		payload,
	};
};
export const getSearch = (searchValue) => async (dispatch) => {
	dispatch(setLoading(true));
	const searchResult = await getSearchService(searchValue);
	dispatch({
		type: actionTypes.GET_SEARCH,
		payload: searchResult,
	});
	dispatch(setLoading(false));
};

export const initialsTodos = () => (dispatch) => {
	dispatch(setLoading(true));
	getTodoList().then((todoList) => {
		dispatch({
			type: actionTypes.INITIALS_TODOS,
			payload: todoList,
		});
		dispatch(setLoading(false));
	});
};
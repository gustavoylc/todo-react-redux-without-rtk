import { todosReducer } from "@reducers/todosReducer";
import { uiTodosReducer } from "@reducers/uiTodosReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
	todosData: todosReducer,
	todosUi: uiTodosReducer,
});

export { rootReducer };

import { rootReducer } from "@reducers";
import {
	applyMiddleware,
	compose,
	legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";

const composeAlternative =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeAlternative(applyMiddleware(thunk));
export const store = createStore(rootReducer, composedEnhancers);

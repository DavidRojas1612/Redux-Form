import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

const composeEnhancers =
  (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({ form: formReducer });

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;

import { combineReducers } from "redux";
import { todoReducer } from "./todos";
import { Todo } from "../actions";

export interface StoreState {
  todos: Array<Todo>;
}

export const reducers = combineReducers<StoreState>({
  todos: todoReducer
});

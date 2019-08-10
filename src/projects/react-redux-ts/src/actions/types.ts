import { Dispatch } from "redux";
import { FetchTodosAction, DeleteTodoAction } from "./todos";

export interface ActionCreator {
  (params?: {}): (dispatch: Dispatch) => void;
}

export type CustomActionType = FetchTodosAction | DeleteTodoAction;

export enum ActionTypes {
  fetchTodos,
  deleteTodo
}

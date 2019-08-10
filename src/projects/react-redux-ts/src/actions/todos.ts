import axios from "axios";
import { Dispatch } from "redux";
import { ActionCreator, ActionTypes } from "./types";

const todosUrl = "http://jsonplaceholder.typicode.com/todos";

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Array<Todo>;
}

export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo;
    payload: number;
}

export const fetchTodos: ActionCreator = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Array<Todo>>(todosUrl);
        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: response.data
        });
    };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
    return {
        type: ActionTypes.deleteTodo,
        payload: id
    };
};

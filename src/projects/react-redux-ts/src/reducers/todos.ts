import { Todo, ActionTypes, CustomActionType } from "../actions";

export const todoReducer = (
  state: Array<Todo> = [],
  action: CustomActionType
) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

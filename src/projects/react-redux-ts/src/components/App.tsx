import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Array<Todo>;
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      fetching: false
    };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({
        fetching: false
      });
    }
  }

  onButtonClick = (): void => {
    const { fetchTodos } = this.props;
    fetchTodos();
    this.setState({
      fetching: true
    });
  };

  onDeleteTodo = (id: number): void => {
    const { deleteTodo } = this.props;
    deleteTodo(id);
  };

  renderList(): Array<JSX.Element> {
    const { todos } = this.props;
    return todos.map(
      (todo: Todo): JSX.Element => {
        return (
          <div
            key={todo.id}
            onClick={() => {
              this.onDeleteTodo(todo.id);
            }}
          >
            {todo.title}
          </div>
        );
      }
    );
  }

  render() {
    const { fetching } = this.state;
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {fetching ? "fetching" : this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Array<Todo> } => ({
  todos: state.todos
});

export const App = connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(_App);

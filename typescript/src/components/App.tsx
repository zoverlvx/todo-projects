import React, {Component} from "react";
import { connect } from "react-redux";
import { 
    Todo, 
    fetchTodos,
    deleteTodo
} from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
    todos: Todo[];
    fetchTodos: Function;
    deleteTodo: typeof deleteTodo;
}

class _App extends Component<AppProps> {

    onClick = (): void => {
        this.props.fetchTodos();
    }

    onTodoClick = (id: number): void => {
        this.props.deleteTodo(id);
    }

    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return (
                <div
                    onClick={
                        () => this.onTodoClick(todo.id)
                    }
                    key={todo.id}
                >
                    {todo.title}
                </div>
            );
        });
    }
    
    render() {
        return (
            <>
                <button 
                    onClick={this.onClick}
                >
                    Fetch
                </button>
                {this.renderList()}
            </>
        ); 
    }
}

function mapStateToProps(
    state: StoreState
):{
    todos: Todo[]
}{
    return {
        todos: state.todos
    };
}

export const App = connect(
    mapStateToProps, 
    { fetchTodos, deleteTodo }
)(_App);

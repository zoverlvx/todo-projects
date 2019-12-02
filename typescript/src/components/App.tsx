import React, {Component} from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
    todos: Todo[];
    fetchTodos(): any;
}

class _App extends Component<AppProps> {

    onClick = (): void => {
        this.props.fetchTodos();
    }

    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return (
                <div
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
    { fetchTodos }
)(_App);

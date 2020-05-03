import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

const URL = "https://jsonplaceholder.typicode.com/todos";

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[];
}

export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo,
    payload: number;
}

export const fetchTodos = () => {
    return (dispatch: Dispatch) => {
    axios.get<Todo[]>(URL)
        .then(res => dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: res.data
        })).catch(err => console.log(err))
    }
} 

export const deleteTodo = (
    id: number
): DeleteTodoAction => {
    return {
        type: ActionTypes.deleteTodo,
        payload: id
    };
}

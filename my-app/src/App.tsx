import React, { useState } from "react";
import "./App.css";

type FormElem = React.FormEvent<HTMLFormElement>
type InputElem = React.ChangeEvent<HTMLInputElement>

interface Todo {
	text: string
	complete: boolean
}

function App(): JSX.Element {
	const [value, setValue] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([])

	function handleChange(e:InputElem): void {
		setValue(e.target.value);
	}

	function handleSubmit(e:FormElem): void {
		e.preventDefault();
		addTodo(value);
		setValue("");
	}

	function addTodo(text: string): void {
		const newTodos: Todo[] = [
			...todos, 
			{
				text, 
				complete: false
			}
		];
		setTodos(newTodos);
	}

	function completeTodo(index: number): void {
		const newTodos: Todo[] = [...todos];
		newTodos[index].complete = !newTodos[index].complete
		setTodos(newTodos);
	}

	function removeTodo(index: number): void {
		
		const newTodos: Todo[] = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	}

	function createTodo(todo: Todo, index: number): JSX.Element {

		const todoStyle = {
			display: "inline-block",
			textDecoration: todo.complete
				? "line-through"
				: ""
		};

		return (
			<div key={index}>
				<div 
					style={todoStyle}
					onClick={() => completeTodo(index)}
				>
					{todo.text}
				</div>
				<button 
					onClick={() => removeTodo(index)}
				>
				X
				</button>
			</div>
		);
	}

    return (
		<>
			<h1>Todo List</h1>
			<form onSubmit={handleSubmit}>
				<input 
					type="text"
					value={value}
					onChange={handleChange} 
					required 
				/>
				<button 
					type="submit"
				>Add Todo
				</button>
			</form>
			<section>
				{todos.map(createTodo)}
			</section>
		</>
    );
}

export default App;

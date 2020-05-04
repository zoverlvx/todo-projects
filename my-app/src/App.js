import React, {Component} from "react";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			todos: [
				{
					text: "Make bed",
					completed: false
				},
				{
					text: "Read",
					completed: false
				}
			],
			todo: ""
		};
		this.createTodo = this.createTodo.bind(this);
		this.addTodo = this.addTodo.bind(this);
	}

	handleChange(e) {
		this.setState({
			todo: e.target.value
		});
	}
	
	addTodo(e) {
		e.preventDefault();
		const newTodo = {text: this.state.todo, completed: false};
		this.setState({
			todos: [...this.state.todos, newTodo],
			todo: ""
		});
	}

	createTodo(todo, index) {
		const todoStyle = {
			display: "inline-block",
			textDecoration: todo.completed
				? "line-through"
				: ""
		};

		return (
			<div key={index}>
				<div
					style={todoStyle}
				>
					{todo.text}
				</div>
			</div>
		);
	}

	render() {
		return (
			<>
				{this.state.todos.map(this.createTodo)}
			</>
		);
	}

}

export default App;

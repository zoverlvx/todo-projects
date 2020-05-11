import React, {Component} from "react";
import TaskForm from "./components/TaskForm.js";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			tasks: [
				{	
					id: 1,
					text: "Make bed",
					completed: false
				},
				{	
					id: 2,
					text: "Read",
					completed: false
				}
			],
		};
	}

	toggleTask = (chosenId) => {
		this.setState({
			tasks: this.state.tasks.map(function(item) {
				if (item.id === chosenId) {
					return {
						...item,
						completed: !item.completed
					};
				}
				return item;
			})
		});
	}

	//task: string
	addTaskToDatabase = (task) => {
		this.setState({ 
			tasks: [
				...this.state.tasks, 
				{
					id: (new Date()).getTime(),
					text: task, 
					completed: false
				}
			]
		});
	}

	// id: number
	deleteTaskFromDatabase = (id) => {
		const tasks = [...this.state.tasks];
		const index = tasks.map(item => item.id).indexOf(id);
		tasks.splice(index, 1);
		this.setState({tasks});
	}

	// task: object {id: number, task: string, completed: boolean}
	createTaskList = (task) => {
		const todoStyle = {
			display: "inline-block",
			textDecoration: task.completed
				? "line-through"
				: ""
		};

		return (
			<div key={task.id}>
				<div
					onClick={() => this.toggleTask(task.id)}
					style={todoStyle}
				>
					{task.text}
				</div>
				<button 
					onClick={
						() => this.deleteTaskFromDatabase(task.id)
					}
				>
					X
				</button>
			</div>
		);
	}

	render() {
		return (
			<>
				{this.state.tasks.map(this.createTaskList)}
				<TaskForm addTask={this.addTaskToDatabase}/>
			</>
		);
	}

}

export default App;

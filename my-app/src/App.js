import React, {Component} from "react";
import "./App.css";

class TaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleSubmit(e) {
		e.preventDefault();
		if (this.state.task.length) {
			this.props.addTask(this.state.task);
			this.setState({task: ""});
		} else {
			alert("Please, add a task.");
		}
	}

	handleChange(e) {
		this.setState({
			task: e.target.value
		});
	}

	render () {
		return (
			<form>
				<input 
					value={this.state.task} 
					onChange={this.handleChange}
				/>
				<button onClick={this.handleSubmit}>Add</button>
			</form>
		);
	}
}

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
		this.createTaskList = this.createTaskList.bind(this);
		this.addTaskToDatabase = this.addTaskToDatabase.bind(this);
		this.deleteTaskFromDatabase = this.deleteTaskFromDatabase.bind(this);
		this.toggleTask = this.toggleTask.bind(this);
	}

	toggleTask(chosenId) {
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
	addTaskToDatabase(task) {
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
	deleteTaskFromDatabase(id) {
		const tasks = [...this.state.tasks];
		const index = tasks.map(item => item.id).indexOf(id);
		tasks.splice(index, 1);
		this.setState({tasks});
	}

	// task: object {id: number, task: string, completed: boolean}
	createTaskList(task) {
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

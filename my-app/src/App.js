import React, {Component} from "react";
import {connect} from "react-redux";
import {toggleTask, deleteFromDatabase} from "./actions";
import TaskForm from "./components/TaskForm.js";
import "./App.css";



class App extends Component {
	constructor(props) {
		super(props);
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
					onClick={() => this.props.toggleTask(task.id)}
					style={todoStyle}
				>
					{task.text}
				</div>
				<button 
					onClick={
						() => this.props.deleteFromDatabase(task.id)
					}
				>
					X
				</button>
			</div>
		);
	}

	render() {
		console.log("props in App: ", this.props);
		return (
			<>
				{this.props.tasks.map(this.createTaskList)}
				<TaskForm />
			</>
		);
	}

}

function mapStateToProps(state) {
	return {
		tasks: state.tasks
	};
}

export default connect(
	mapStateToProps, 
	{
		toggleTask, 
		deleteFromDatabase
	}
)(App);

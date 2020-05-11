import React, {Component} from "react";

export default class TaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: ""
		};
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.task.length) {
			this.props.addTask(this.state.task);
			this.setState({task: ""});
		} else {
			alert("Please, add a task.");
		}
	}

	handleChange = (e) => {
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

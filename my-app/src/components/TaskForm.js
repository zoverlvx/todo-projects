import React, {Component} from "react";
import {connect} from "react-redux";
import {addToDatabase} from "../actions";

class TaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: ""
		};
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.task.length) {
			const newTask = {
				id: (new Date()).getTime(),
				text: this.state.task,
				completed: false
			};
			this.props.addToDatabase(newTask);
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

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, {addToDatabase})(TaskForm);

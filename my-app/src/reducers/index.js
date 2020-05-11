import {ADD, TOGGLE_COMPLETE, DELETE} from "../actions";

const initialState = {
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

export default function (state = initialState, action) {
	switch(action.type) {
		case ADD:
			return {
				tasks: [...state.tasks, action.payload]
			};
		case TOGGLE_COMPLETE:
			return {
				tasks: state.tasks.map(function(item) {
					if (item.id === action.payload) {
						return {
							...item,
							completed: !item.completed
						};
					}
					return item;
				})
			};
		case DELETE:
			return {
				tasks: state.tasks.filter(function(item) {
					return item.id !== action.payload;
				})
			};
		default:
			return state;
	}
}

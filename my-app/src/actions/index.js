export const ADD = "ADD";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const DELETE = "DELETE";

export function addToDatabase(payload) {
	return {
		type: ADD,
		payload
	};
}

export function toggleTask(payload) {
	return {
		type: TOGGLE_COMPLETE,
		payload
	};
}

export function deleteFromDatabase(payload) {
	return {
		type: DELETE,
		payload
	};
}

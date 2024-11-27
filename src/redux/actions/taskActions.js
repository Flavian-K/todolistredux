import {
	ADD_TASK,
	EDIT_TASK,
	TOGGLE_TASK,
	FILTER_TASKS,
} from "../constants/actionTypes";

// Action to add a new task
export const addTask = (task) => ({
	type: ADD_TASK,
	payload: task,
});

// Action to edit a task's description
export const editTask = (id, newDescription) => ({
	type: EDIT_TASK,
	payload: { id, newDescription },
});

// Action to toggle a task's completion status
export const toggleTask = (id) => ({
	type: TOGGLE_TASK,
	payload: id,
});

// Action to filter tasks (done or not done)
export const filterTasks = (isDone) => ({
	type: FILTER_TASKS,
	payload: isDone,
});

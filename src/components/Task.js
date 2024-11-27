import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../redux/actions/taskActions";

const Task = ({ task }) => {
	const dispatch = useDispatch();

	// Toggle the task's done status
	const handleToggle = () => {
		dispatch(toggleTask(task.id));
	};

	// Edit the task's description
	const handleEdit = () => {
		const newDescription = prompt("Edit task:", task.description);
		if (newDescription) {
			dispatch(editTask(task.id, newDescription));
		}
	};

	return (
		<div>
			<span
				className={task.isDone ? "completed" : ""}
				onClick={handleToggle} // Mark as done on click
				style={{ cursor: "pointer", marginRight: "10px" }}
			>
				{task.description}
			</span>
			<button onClick={handleEdit}>Edit</button>
		</div>
	);
};

export default Task;

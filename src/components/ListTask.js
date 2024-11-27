import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterTasks } from "../redux/actions/taskActions";
import Task from "./Task";

const ListTask = () => {
	const { tasks, filter } = useSelector((state) => state);
	const dispatch = useDispatch();

	// Filter tasks based on the current filter state
	const filteredTasks = tasks.filter((task) =>
		filter === "done" ? task.isDone : filter === "notDone" ? !task.isDone : true
	);

	return (
		<div>
			<button onClick={() => dispatch(filterTasks("all"))}>Show All</button>
			<button onClick={() => dispatch(filterTasks("done"))}>Show Done</button>
			<button onClick={() => dispatch(filterTasks("notDone"))}>
				Show Not Done
			</button>

			{filteredTasks.map((task) => (
				<Task key={task.id} task={task} />
			))}
		</div>
	);
};

export default ListTask;

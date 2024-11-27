import React from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import "./theme.css";

const App = () => {
	return (
		<div>
			<h1>ToDo List</h1>
			<AddTask />
			<ListTask />
		</div>
	);
};

export default App;

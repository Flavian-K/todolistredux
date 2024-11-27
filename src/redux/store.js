import { createStore } from "redux";
import taskReducer from "./reducers/taskReducer";

// Creating the Redux store and passing the reducer
const store = createStore(taskReducer);

export default store;

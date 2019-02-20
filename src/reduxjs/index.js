import { createStore } from "redux";
import todoApp from "./todoApp";
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from "./actions";

const store = createStore(todoApp, window.STATE_FROM_SERVER);

console.log(store.getState());

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodo("Learning about actions"));
store.dispatch(addTodo("Learning about reducers"));
store.dispatch(addTodo("Learning about store"));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe();


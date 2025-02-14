/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  completedTodo: (id) => {}
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;

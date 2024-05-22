/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTodo } from "../context";

const TodoItem = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo?.todo);
  const { updateTodo, deleteTodo, completedTodo } = useTodo();

  const editTodo = () => {
    updateTodo(todo?.id, { ...todo, todo: todoMsg });
    setEdit(false);
  };

  const completeTodo = () => {
    completedTodo(todo?.id);
  };

  return (
    <div
      className={`flex w-full border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo?.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo?.completed}
        onChange={completeTodo}
      />
      <div className="w-full flex items-center">
        {edit ? (
          <input
            type="text"
            className={`border outline-none w-full bg-transparent rounded-lg ${
              edit ? "border-black/10 px-2" : "border-transparent"
            }`}
            value={todoMsg || ""}
            onChange={(e) => setTodoMsg(e.target.value)}
          />
        ) : (
          <div className={`${todo.completed && "line-through"}`}>{todoMsg}</div>
        )}
      </div>
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo?.completed) return;

          if (edit) {
            editTodo();
          } else setEdit((prev) => !prev);
        }}
        disabled={todo?.completed}
      >
        {edit ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo?.id)}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItem;

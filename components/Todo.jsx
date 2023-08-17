"use client";
import { useTransition } from "react";
import { completeTodo } from "../utils/actions";

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div
      className="todo"
      style={{
        textDecoration: `${todo.completed ? "line-through" : "none"}`,
      }}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  );
};

export default Todo;

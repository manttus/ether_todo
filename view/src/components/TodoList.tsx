import { useState } from "react";
import { TodoListProps } from "../types/props-type";
import TodoCard from "./TodoCard";
let index = 0;
const TodoList = (props: TodoListProps) => {
  const markTodo = (id: number) => {
    props.markTodo(id);
  };
  return (
    <div className="flex flex-col w-1/2 border-2 border-gray-100 mt-5 py-5 items-center shadow-md shadow-gray-50 ">
      {/* {props.todoList.map((todo) => {
        return (
          <>
            <div className="flex w-1/2 ">
              <input type={"text"} value={todo.id} hidden />
              <input
                type="text"
                className=" h-5 bg-white  focus: outline-none"
                value={todo.todo}
                disabled
              />
            </div>
            <div className="  flex w-1/6 justify-end">
              <input
                type="checkbox"
                className="h-5 w-5 focus: outline-none"
                onChange={markTodo}
              />
            </div>
          </>
        );
      })} */}

      {props.todoList.map((todo) => {
        index = index + 1;
        return <TodoCard todoItem={todo} markTodo={markTodo} index={index} />;
      })}
    </div>
  );
};

export default TodoList;

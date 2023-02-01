import { useState } from "react";

const TodoCard = (props: any) => {
  return (
    <div
      key={+props.todoItem.id}
      className="flex  m-2 p-5 border-2 w-11/12 border-gray-100 justify-between items-center"
    >
      <div className="flex w-1/2">
        <input
          type="text"
          className=" h-5 bg-white  focus: outline-none"
          value={props.todoItem.todo}
          disabled
        />
      </div>
      <div className="  flex w-1/6 justify-end">
        <input
          type="checkbox"
          className="h-5 w-5 focus: outline-none"
          onChange={(e) => {
            props.markTodo(+props.todoItem.id);
          }}
          checked={props.todoItem.isComplete}
        />
      </div>
    </div>
  );
};

export default TodoCard;

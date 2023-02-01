import { useState } from "react";
import { TodoFormProps } from "../types/props-type";
import Button from "./Button";

const TodoForm = (props: TodoFormProps) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.addTodo(todo);
  };

  return (
    <div className="flex w-1/2 h-52 border-2 border-gray-100 mt-14 justify-center items-center shadow-md shadow-gray-50">
      <form onSubmit={submitHandler} className="flex w-full justify-center">
        <div className="w-1/2 flex justify-end">
          <input
            className=" w-full h-12 border-2  p-3 focus: outline-none"
            type={"text"}
            placeholder="Eg. Learn Tailwind CSS"
            value={todo}
            onChange={handleChange}
          />
        </div>
        <div className="w-1/">
          <Button
            type={"submit"}
            text={"Add Task"}
            clickHandler={() => console.log("Add Task")}
          />
        </div>
      </form>
    </div>
  );
};

export default TodoForm;

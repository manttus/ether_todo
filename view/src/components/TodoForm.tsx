import Button from "./Button";

const TodoForm = () => {
  return (
    <div className="flex w-1/2 h-52 border-2 border-gray-100 mt-14 justify-center items-center shadow-md shadow-gray-50">
      <div className="w-1/2 flex justify-end">
        <input
          className=" w-full h-12 border-2  p-3 focus: outline-none"
          type={"text"}
          placeholder="Eg. Learn Tailwind CSS"
        />
      </div>
      <div className="w-1/">
        <Button
          text={"Add Task"}
          clickHandler={() => console.log("Add Task")}
        />
      </div>
    </div>
  );
};

export default TodoForm;

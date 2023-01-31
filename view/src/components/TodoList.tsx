import Button from "./Button";

const TodoList = () => {
  return (
    <div className="flex flex-col w-1/2 border-2 border-gray-100 mt-5 py-5 items-center shadow-md shadow-gray-50 ">
      <div className="flex m-2 p-5 border-2 w-11/12 border-gray-100 justify-between items-center">
        <div className="flex w-1/2 ">
          <input
            type="text"
            className=" h-5 bg-white  focus: outline-none"
            value={"Learn Tailwind CSS"}
            disabled
          />
        </div>
        <div className="  flex w-1/6 justify-end">
          <input type="checkbox" className="h-5 w- focus: outline-none" />
        </div>
      </div>
    </div>
  );
};

export default TodoList;

const TodoPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" flex w-3/4 h-52 justify-center items-center">
        <input
          className=" w-1/2 shadow-inner border-2 border-gray-200 shadow-gray-200 p-3 focus: outline-none"
          type={"text"}
          placeholder="Add New Task"
        />
      </div>
    </div>
  );
};

export default TodoPage;

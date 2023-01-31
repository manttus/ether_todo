import Navbar from "../components/Navbar";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const TodoPage = () => {
  return (
    <div className="flex flex-col items-center  h-screen">
      <Navbar />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoPage;

import Navbar from "../components/Navbar";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { WalletData } from "../types/props-type";

const TodoPage = (props: WalletData) => {
  return (
    <div className="flex flex-col items-center  h-screen">
      <Navbar connectWallet={props.connectWallet} address={props.address} />
      {props.address ? (
        <>
          <TodoForm addTodo={props.addTodo} />
          <TodoList todoList={props.tasks} markTodo={props.markTodo} />
        </>
      ) : (
        <div className="flex h-full justify-center  items-center">
          Awaiting MetaMask Connection
        </div>
      )}
    </div>
  );
};

export default TodoPage;

import { useState } from "react";
import "../dist/output.css";
import TodoPage from "./pages/TodoPage";
import { ethers } from "ethers";
import todo from "../../contract_data/todo.json";
import todoaddress from "../../contract_data/todo-address.json";

declare var window: any;

const App = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [account, setAccount] = useState<String | null>(null);
  const [todoContract, setTodoContract] = useState<any>(null);
  const [tasks, setTasks] = useState<any>([]);
  const connectWallet = async () => {
    setIsLoading(true);
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(account[0]);
    setIsLoading(false);
    loadContracts();
  };

  const loadContracts = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const todoCon = new ethers.Contract(todoaddress.address, todo.abi, signer);
    setTodoContract(todoCon);
    console.log(todoCon);
    loadTasks(todoCon);
  };

  const loadTasks = async (contract: any) => {
    const tasks = await contract.getTodo();
    console.log(tasks);
    setTasks(tasks);
  };

  const addTask = async (task: string) => {
    const tx = await todoContract.addTodo(task);
    await tx.wait();
  };

  const markTask = async (id: number) => {
    const tx = await todoContract.markTodo(id);
    await tx.wait();
  };

  return (
    <TodoPage
      connectWallet={connectWallet}
      address={account}
      isLoading={isLoading}
      addTodo={addTask}
      tasks={tasks}
      markTodo={markTask}
    />
  );
};

export default App;

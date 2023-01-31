import { useState } from "react";
import "../dist/output.css";
import TodoPage from "./pages/TodoPage";
import { ethers } from "ethers";
import TodoContract from "../../artifacts/contracts/Todo.sol/Todo.json";

declare var window: any;

const App = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [account, setAccount] = useState<String | null>(null);
  const connectWallet = async () => {
    setIsLoading(true);
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(account[0]);
    setIsLoading(false);
  };

  const loadContracts = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const todoContract = new ethers.Contract(
      TodoContract.address,
      TodoContract.abi,
      signer
    );
    console.log(todoContract);
  };
  return (
    <TodoPage
      connectWallet={connectWallet}
      address={account}
      isLoading={isLoading}
    />
  );
};

export default App;

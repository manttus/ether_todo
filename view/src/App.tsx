import { useState } from "react";
import "../dist/output.css";
import TodoPage from "./pages/TodoPage";

const App = () => {
  const [wallet, setWallet] = useState<String | null>(null);
  const connectWallet = () => {
    console.log("connect wallet");
  };
  return <TodoPage />;
};

export default App;

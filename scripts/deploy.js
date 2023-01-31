const fs = require("fs");
const path = require("path");

const main = async () => {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const balance = await deployer.getBalance();
  console.log("Account balance:", balance.toString());
  const Todo = await ethers.getContractFactory("Todo");
  const todo = await Todo.deploy();
  console.log("Todo address:", todo.address);
  saveJSONFile("Todo", todo);
};

const saveJSONFile = (contracts, data) => {
  const contracts_data = path.join(__dirname, "..", "contract_data");
  console.log(contracts_data);
  const Todo = {
    address: data.address,
    abi: data.interface.format("json"),
  };

  if (!fs.existsSync(contracts_data)) {
    fs.mkdirSync("contract_data");
  }

  fs.writeFileSync(contracts_data + "\\Todo" + ".json", JSON.stringify(Todo));
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

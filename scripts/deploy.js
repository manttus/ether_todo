const fs = require("fs");
const { artifacts } = require("hardhat");
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

const saveJSONFile = (contract, data) => {
  const contracts_data = path.join(__dirname, "..", "contract_data");
  console.log(contracts_data);

  if (!fs.existsSync(contracts_data)) {
    fs.mkdirSync("contract_data");
  }

  fs.writeFileSync(
    contracts_data + "\\todo-address" + ".json",
    JSON.stringify({ address: data.address }, undefined, 2)
  );

  const readArtifact = artifacts.readArtifactSync(contract);

  fs.writeFileSync(
    contracts_data + "\\todo" + ".json",
    JSON.stringify(readArtifact, null, 2)
  );
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

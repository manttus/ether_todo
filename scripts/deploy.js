const main = async () => {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const balance = await deployer.getBalance();
  console.log("Account balance:", balance.toString());
  const Todo = await ethers.getContractFactory("Todo");
  const todo = await Todo.deploy();
  console.log("Todo address:", todo.address);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

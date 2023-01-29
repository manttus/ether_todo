const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Todo Test", () => {
  let todo, todoContract;

  beforeEach(async () => {
    todo = await ethers.getContractFactory("Todo");
    todoContract = await todo.deploy();
  });

  it("Should add todo if addTodo is called", async () => {
    const newTodo = "Complete Marketplace UI";
    await todoContract.addTodo(newTodo);
    const currentTodo = await todoContract.getATodo(0);
    expect(currentTodo.todo).to.equal(newTodo);
  });

  it("Should mark todo as completed or incomplete", async () => {
    const newTodo = "Buy Milk";
    await todoContract.addTodo(newTodo);
    await todoContract.markTodo(0);

    const updatedTodo = await todoContract.getATodo(0);
    expect(updatedTodo.isComplete).to.be.true;

    await todoContract.markTodo(0);
    const updatedTodo2 = await todoContract.getATodo(0);
    expect(updatedTodo2.isComplete).to.be.false;
  });

  it("Should get a todo item by index", async () => {
    const todo = "Buy milk";
    await todoContract.addTodo(todo);
    const result = await todoContract.getATodo(0);
    expect(result.todo).to.equal(todo);
    expect(result.isComplete).to.be.false;
  });

  it("Should get all todo items", async () => {
    const todo = "Buy milk";
    await todoContract.addTodo(todo);

    const todo1 = "Buy eggs";
    await todoContract.addTodo(todo1);

    const result = await todoContract.getTodo();
    expect(result).to.have.lengthOf(2);
  });
});

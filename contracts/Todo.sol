//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Todo {
    uint256 private indi = 0;

    struct TodoItem {
        string todo;
        bool isComplete;
    }

    mapping(uint256 => TodoItem) private todoItems;

    // function to add new todo list
    function addTodo(string memory todo) external {
        todoItems[indi] = TodoItem(todo, false);
        indi++;
    }

    // marks the todo completed or not completed
    function markTodo(uint256 _index) external returns (bool) {
        todoItems[_index].isComplete = !todoItems[_index].isComplete;
        return todoItems[_index].isComplete;
    }

    function getATodo(
        uint256 indicator
    ) external view returns (TodoItem memory) {
        return todoItems[indicator];
    }

    // gets all todo
    function getTodo() external view returns (TodoItem[] memory) {
        TodoItem[] memory todoList = new TodoItem[](indi);
        for (uint256 i = 0; i < indi; i++) {
            todoList[i] = todoItems[i];
        }
        return todoList;
    }
}

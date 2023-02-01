export type ButtonProps = {
  clickHandler: () => void;
  text: String;
  address?: String | null;
  type?: String;
};

export type WalletData = {
  connectWallet: () => void;
  address: String | null;
  isLoading: Boolean;
  addTodo: (task: string) => Promise<void>;
  tasks: String[];
  markTodo: (id: number) => Promise<void>;
};

export type NavbarProps = {
  connectWallet: () => void;
  address: String | null;
};

export type TodoFormProps = {
  addTodo: (task: string) => Promise<void>;
};

export type TodoListProps = {
  todoList: String[];
  markTodo: (id: number) => Promise<void>;
};

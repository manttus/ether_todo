export type ButtonProps = {
  clickHandler: () => void;
  text: String;
  address?: String | null;
};

export type WalletData = {
  connectWallet: () => void;
  address: String | null;
  isLoading: Boolean;
};

export type NavbarProps = {
  connectWallet: () => void;
  address: String | null;
};

export type TodoFormProps = {
  isLoading: Boolean;
};

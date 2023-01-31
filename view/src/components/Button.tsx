import { ButtonProps } from "../types/props-type";

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.clickHandler}
      className="bg-purple-500 h-12 rounded-none ml-2 hover:bg-purple-700 hover:scale-105 text-white font-bold py-2 px-4"
    >
      {props.text}
    </button>
  );
};

export default Button;

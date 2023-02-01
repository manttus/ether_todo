import { ButtonProps } from "../types/props-type";

const Button = (props: ButtonProps) => {
  const address = props.address;
  return (
    <>
      {address ? (
        <button className="text-md bg-purple-500 h-12 rounded-md ml-2 hover:bg-purple-700 hover:scale-105 text-white font-regular py-2 px-4">
          {address.slice(0, 6) + "..." + address.slice(-4)}
        </button>
      ) : (
        <button
          type={"submit"}
          onClick={props.clickHandler}
          className="text-md bg-purple-500 h-12 rounded-md ml-2 hover:bg-purple-700 hover:scale-105 text-white font-regular py-2 px-4"
        >
          {props.text}
        </button>
      )}
    </>
  );
};

export default Button;

import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex w-full h-20 shadow-sm shadow-gray-100 justify-end">
      <div className="flex w-1/2 justify-end px-10 items-center">
        <Button text="Connect" clickHandler={() => console.log("Login")} />
      </div>
    </div>
  );
};

export default Navbar;

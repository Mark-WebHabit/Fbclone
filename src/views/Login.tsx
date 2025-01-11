import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  type InputAttr = React.InputHTMLAttributes<HTMLInputElement>;
  const Input = ({ ...attr }: InputAttr): JSX.Element => {
    return (
      <input
        className="w-full py-3.5 px-4 outline-none border-grayWhite border rounded-md focus:border-fbBlue focus:shadow-equal focus:shadow-fbBlue caret-fbBlue"
        {...attr}
      />
    );
  };

  return (
    <>
      <form className="w-full phone:w-400 p-5 bg-pure shadow-lg flex flex-col gap-3 rounded-lg">
        <Input
          type="text"
          placeholder="Email or phone number"
          name="emailOrPhone"
        />
        <Input type="password" placeholder="Password" name="password" />

        <button className="font-sans w-full bg-fbBlue text-pure py-2 text-2xl font-bold rounded-md">
          Log in
        </button>

        <Link to="">
          <p className="text-fbBlue text-center my-4 text-sm">
            Forgot password?
          </p>
        </Link>
        <hr />

        <button
          className="bg-green text-xl font-bold w-fit mx-auto px-4 py-2 text-pure rounded-md mt-4 mb-2 font-sans"
          onClick={() => {
            navigate("/register");
          }}
        >
          Create new account
        </button>
      </form>
      <small className="text-sm mt-4 font-sans">
        <span className="font-bold">Create a Page </span>
        for celebrity, brand or business.
      </small>
    </>
  );
}

export default Login;

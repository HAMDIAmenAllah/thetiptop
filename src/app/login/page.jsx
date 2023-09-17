import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/signUp/SignUp";
import React from "react";

const Login = () => {
  return (
    <section className="w-full  h-full flex justify-start items-center pt-8 lg:pt-10 max-w-[1560px] mx-auto">
      <div className=" flex flex-col  space-y-10 lg:flex-row lg:justify-center w-full lg:space-y-0 lg:px-10">
        <div className="lg:w-1/2">
          <SignIn />
        </div>
        <div className="lg:w-1/2">
          <SignUp />
        </div>
      </div>
    </section>
  );
};

export default Login;

import Button from "@/components/button/Button";
import FiltreNavbar from "@/components/filtreNavbar/FiltreNavbar";
import Password from "@/components/pasword/Password";
import Image from "next/image";
import React from "react";

const MotDePasse = () => {
  return (
    <section className="w-full max-w-[1560px] mx-auto">
      <div className="lg:px-10  flex flex-col  space-y-10 lg:flex-row lg:justify-center w-full lg:space-y-0">
        <FiltreNavbar/>
      </div>
      <div className="w-full  px-3 text-white">
        <Password/>
      </div>
      {/* <div className="fixed bottom-0 w-full hidden lg:block" style={{zIndex: -1}}>
        <Image
          src="/assets/images/img-footer-login.svg"
          width={1560}
          height={952}
          alt="img elements"
          className="relative"
        />
      </div> */}
    </section>
  );
};

export default MotDePasse;

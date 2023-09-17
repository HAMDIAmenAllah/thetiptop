import Button from "@/components/button/Button";
import FiltreNavbar from "@/components/filtreNavbar/FiltreNavbar";
import Image from "next/image";
import React from "react";

const Newsletters = () => {
  return (
    <section className="w-full max-w-[1560px] mx-auto">
      <div className="lg:px-10  flex flex-col  space-y-10 lg:flex-row lg:justify-center w-full lg:space-y-0">
        <FiltreNavbar />
      </div>
      <div className="mt-10 space-y-10 flex justify-center ">
        <fieldset>
          <div className="mt-6 space-y-6">
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-white">
                  Cochez cette case pour vous s’inscrire à notre newsletter
                </label>
                <p className="text-white">
                  En cochant cette case vous acceptez nos conditions générales, vous acceptez également de recevoir toutes nos <br />
                  newsletters à savoir nos offres plus les promotions de la gamme ThéTipTop.
                </p>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="flex justify-center ">
        <div div className="flex flex-col justify-center space-y-2 w-1/4 pt-4">
          <label htmlFor="email" className="text-white text-sm">E-mail</label>
          <input
            id="email"
            type="email"
            className="h-10 text-black rounded-lg pl-4 max-w-[616px] lg:max-w-full"
            placeholder="contact@thetiptop.com "
          />
          {/* <p className="text-red-500">
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
          </p> */}
          <Button
            title={"Valider"}
            className="mx-auto text-white font-semibold w-full rounded-lg py-1"
          />
        </div>
      </div>

      {/* <div className="fixed bottom-0 w-full hidden lg:block " style={{zIndex: -1}}>
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

export default Newsletters;
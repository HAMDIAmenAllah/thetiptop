import Button from "@/components/button/Button";
import FiltreNavbar from "@/components/filtreNavbar/FiltreNavbar";
import Image from "next/image";
import React from "react";

const HistoriqueDesGains = () => {
  return (
    <section className="w-full max-w-[1560px] mx-auto">
      <div className="lg:px-10  flex flex-col  space-y-10 lg:flex-row lg:justify-center w-full lg:space-y-0 pb-0">
        <FiltreNavbar/>
      </div>
          
        <div className="border-b border-gray-900/10 pb-12 flex min-h-full flex-1 flex-col justify-center container mx-auto px-10">

          <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 containerPerso">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-normal text-white">
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-0.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-normal"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-normal text-white">
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-0.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-normal"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-normal text-white">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-0.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-normal"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-normal text-white">
                Téléphone
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-0.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-normal"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-normal text-white">
                City
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-0.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-normal"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-normal text-white">
                State / Province
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-0.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-normal"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-normal text-white">
                ZIP / Postal code
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-0.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-normal"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="street-address" className="block text-sm font-medium leading-normal text-white">
                Address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-0.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-normal"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="street-address" className="block text-sm font-medium leading-normal text-white">
                Complément d'address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-0.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-normal"
                />
              </div>
            </div>
          </div>
        <div className="flex justify-center">
          <Button title={"Mettre à jour"} className=" text-white text-sm md:text-sm lg:text-sm py-0 px-14" />
        </div>

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

export default HistoriqueDesGains;

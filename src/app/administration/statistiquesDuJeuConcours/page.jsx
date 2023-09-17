import FiltreNavbar from "@/components/filtreNavbar/FiltreNavbar";
import PriceStats from "@/components/priceStats/PriceStats";
import Image from "next/image";
import React from "react";

const HistoriqueDesGains = () => {
  return (
    <section className="w-full max-w-[1560px] mx-auto">
          <div className="lg:px-10  flex flex-col  space-y-10 lg:flex-row lg:justify-center w-full lg:space-y-0">
            <FiltreNavbar/>
          </div>
          <PriceStats />
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

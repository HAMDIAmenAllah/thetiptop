"use client"
import FiltreNavbar from "@/components/filtreNavbar/FiltreNavbar";
import PriceHistory from "@/components/priceHistory/PriceHistory";
// import Search from "@/components/search/Search";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";

const HistoriqueDesGains = () => {

  const [role, setRole] = useState('');
  const api_url = process.env.API_URL;

  useEffect(() => {

    const getRole = () => {
      const token = localStorage.getItem('token');
      axios.get(
        `${api_url}/auth/info-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
        .then(res => setRole(res.data.role))
        .catch(error => console.log(error));
    };

    getRole();
  }, [])


  return (
    <section className="w-full max-w-[1560px] mx-auto">
      <div className="lg:px-10  flex flex-col  space-y-10 lg:flex-row lg:justify-center w-full lg:space-y-0">
        <FiltreNavbar />
      </div>
      {/* <div className="flex flex-col lg:flex-row w-full lg:space-x-3"> */}
      {/* <div className="hidden lg:block">
        <Search />
      </div> */}
      <PriceHistory role={role} />
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

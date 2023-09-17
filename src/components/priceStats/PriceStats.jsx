"use client";
import React, { useEffect, useState } from "react";


import axios from "axios";
import { historiques } from "@/api/Data";


const PriceStats = () => {
  const api_url = process.env.API_URL;
  // const [donnees, setDonnees] = useState([]);
  const [statisticsData, setStatisticsData] = useState({
    totalUser: 0,
    gainWin: 0,
    totalUserWithTicket: 0,
    gainGot: 0,
  });
  // console.log('token', token);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `${api_url}/admin/stats`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        setStatisticsData(response.data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])
  console.log("data", statisticsData);
  return (
    <>
      <div className="hidden lg:block" style={{ marginLeft: 325 }} >
        <table className="table p-4 bg-grayBackground rounded-lg margePerso ">
          <tbody>
            <tr className="text-gray-700">
              <td className="p-4 text-white">
                Utilisateurs :
              </td>
              <td className="p-4 text-white">
                {statisticsData.totalUser}
              </td>
            </tr>
            <tr className="text-gray-700">
              <td className="p-4 text-white">
                Nombre de joeur :
              </td>
              <td className="p-4 text-white">
                {statisticsData.totalUserWithTicket}
              </td>
            </tr>
            <tr className="text-gray-700">
              <td className="p-4 text-white">
                Gain obtenu :
              </td>
              <td className="p-4 text-white">
                {statisticsData.gainWin}
              </td>
            </tr>
            <tr className="text-gray-700">
              <td className="p-4 text-white">
                Gain récupéré :
              </td>
              <td className="p-4 text-white">
                {statisticsData.gainGot}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="lg:hidden">
        <table className="table p-4 bg-grayBackground rounded-lg margePerso ">
          <tbody>
            <tr className="text-gray-700">
              <td className="p-4 text-white">
                Utilisateurs :
              </td>
              <td className="p-4 text-white">
                320
              </td>
            </tr>
            <tr className="text-gray-700">
              <td className="p-4 text-white">
                Nombre de joeur :
              </td>
              <td className="p-4 text-white">
                267
              </td>
            </tr>
            <tr className="text-gray-700">
              <td className="p-4 text-white">
                Gain obtenu :
              </td>
              <td className="p-4 text-white">
                267
              </td>
            </tr>
            <tr className="text-gray-700">
              <td className="p-4 text-white">
                Gain récupéré :
              </td>
              <td className="p-4 text-white">
                137
              </td>
            </tr>
          </tbody>
        </table>
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
    </>
  );
}

export default PriceStats;
"use client";
import axios from "axios";
import {useEffect, useState} from "react";
import Pagination from "../pagination/Pagination";
import Employee from "@/components/employee/Employee";

const PriceHistory = ({role}) => {
    const api_url = process.env.API_URL;
    const [priceData, setPriceData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(
                    `${api_url}/ticket`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
                setPriceData(response.data)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }
        fetchData()
    }, [])
    const handleSearch = event => {
        const value = event.currentTarget.value;
        setSearch(value);
    };
    const handlePageChange = page => {
        setCurrentPage(page);
    }
    const itemsPerPage = 5;
    const filteredPrices = priceData.filter(c => c.codeTicket.toLowerCase().includes(search.toLowerCase()))
    const paginatedPrices = Pagination.getData(
        filteredPrices,
        currentPage,
        itemsPerPage
    );
    // const start = currentPage * itemsPerPage - itemsPerPage;
    // const paginatedPrices = priceData.slice(start, start + itemsPerPage);

    return (
        <>
            <div className="hidden lg:block">
                <div className="flex flex-col space-y-3 w-1/4 mb-8" style={{marginLeft: 325}}>
                    <label htmlFor="recherche" className="text-white">Recherche</label>
                    <input
                        id="recherche"
                        type="text"
                        className="h-10 text-black rounded-lg pl-4 max-w-[616px] lg:max-w-full"
                        placeholder="Entrer le numéro d’un ticket"
                        onChange={handleSearch}
                        value={search}
                    />
                </div>
            </div>
            {/* <div className="hidden lg:block"> */}
            <div className="">
                {/* <div className="flex flex-col lg:flex-col lg:justify-center w-full lg:space-y-0"> */}
                <div className="flex flex-col justify-center w-full lg:space-y-0">

                    <table className="table p-4 bg-grayBackground rounded-lg shadow mx-10">
                        <thead>
                        <tr>
                            <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-white">
                                Code utilisé
                            </th>
                            {/* <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-white">
                          ID du gain
                        </th> */}
                            <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-white">
                                Date de jeu
                            </th>
                            <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-white">
                                Gain obtenu
                            </th>
                            <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-white">
                                Date de retrait
                            </th>
                            <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-white">
                                Etat de ticket
                            </th>
                            {role === 'EMPLOYEE' &&
                                <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-white">
                                    Changer l'état du ticket
                                </th>
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {paginatedPrices && paginatedPrices.map((historique) => {
                            return (
                                <tr key={historique.codeTicket} className="text-white">
                                    {/* <td className="border p-4 dark:border-dark-5">
                            {historique.ownerId}
                          </td> */}
                                    <td className="border p-4 dark:border-dark-5">
                                        {historique.codeTicket}
                                    </td>
                                    <td className="border p-4 dark:border-dark-5">
                                        {historique.datePlay}
                                    </td>
                                    <td className="border p-4 dark:border-dark-5">
                                        {historique.gainValue}
                                    </td>
                                    <td className="border p-4 dark:border-dark-5">
                                        {historique.datePickup}
                                    </td>
                                    <td className="border p-4 dark:border-dark-5">
                                        {historique.stateTicket}
                                    </td>
                                    <Employee
                                        role={role}
                                        stateTicketActual={historique.stateTicket}
                                        codeTicket={historique.codeTicket}
                                    />
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} length={priceData.length}
                                onPageChanged={handlePageChange}/>

                </div>
            </div>
            {/* <div className="lg:hidden"> */}
            {/* <div className="">
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
      </div> */}
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
{/* <a
href="#"
aria-current="page"
className=" z-10  bg-indigo-600  text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
1
</a>
<a
href="#"
className="  text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50  focus:outline-offset-0"
>
2 */
}
export default PriceHistory;
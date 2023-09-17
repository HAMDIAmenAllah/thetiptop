import axios from "axios";
import {memo, useEffect, useState} from "react";

const Employee = ({role, stateTicketActual, codeTicket}) => {

    const token = localStorage.getItem('token');
    const api_url = process.env.API_URL;
    const [stateTicket, setStateTicket] = useState([]);
    const [stateIdTicketActual, setStateIdTicketActual] = useState(0);

    useEffect(() => {
        const getState = () => {
            if (role === 'EMPLOYEE') {
                axios.get(
                    `${api_url}/state-ticket`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    }
                )
                    .then(res => {
                        setStateTicket(res.data)
                        const stateMap = res.data.filter((state) => state.stateValue === stateTicketActual);
                        setStateIdTicketActual(stateMap[0].stateId);
                    })
                    .catch(error => console.log(error));
            }
        }

        getState();


    }, [])

    const handleChnage = (value) => {

        if (confirm(`Vous êtes sur de changer le statut du ticket ${codeTicket} ?`)) {
            axios.put(
                `${api_url}/ticket/${codeTicket}`,
                {
                    stateTicketId: value
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                .then(res => {
                    alert(res.data.message);
                    setStateIdTicketActual(value);
                    location.reload();
                })
                .catch(error => console.log(error));
        }
    }


    return (
        <>
            {role === 'EMPLOYEE' &&
                <td className="border p-4 dark:border-dark-5">
                    <select name="gain-id"
                            className="block mt-0 mb-0 m-auto p-2 text-textOnWhiteBackground border-2 border-greenTip rounded-2xl"
                            value={stateIdTicketActual}
                            onChange={(e) => handleChnage(e.target.value)}>
                        {stateTicket && stateTicket.map((state) => {
                            return (
                                <option
                                    key={state.stateId}
                                    value={state.stateId}>
                                    {state.stateValue}
                                </option>
                            )
                        })}
                    </select>
                </td>
            }
        </>
    )
}

export default Employee;
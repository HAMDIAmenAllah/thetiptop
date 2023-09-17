import React, { useEffect, useState } from 'react'
import Button from '../button/Button';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import useAuth from '@/hooks/useAuth';


const User = () => {
  const { logout } = useAuth();
  const api_url = process.env.API_URL;



  const handleDelete = async () => {
    const confirmed = window.confirm("Êtes-vous sûr de vouloir supprimer votre compte ? \nCette action est irréversible");
    if (confirmed) {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(
          `${api_url}/auth/delete`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toast.success("Votre compte est supprimé!");
        console.log(response.data);
        logout();

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <>
      <div className='flex flex-row justify-center mt-10 space-x-5'>
        <div className='mt-7'>
          <p>Supprimer le compte</p>
        </div>
        <div className='flex'>
          <Button title={"Supprimer"} className="px-6 rounded-full text-sm md:text-md lg:text-xl bg-red-700 py-[2px]"
            onClick={() => handleDelete()}
          />
        </div>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </>
  )
}

export default User
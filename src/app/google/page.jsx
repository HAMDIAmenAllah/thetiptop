'use client'

import React, {useEffect} from 'react';
import {useSearchParams} from "next/navigation";
import axios from "axios";
import {useRouter} from "next/navigation";

const GooglePage = () => {
    const queryParams = useSearchParams();
    const code = queryParams.get('code');
    const router = useRouter();
    const api_url = process.env.API_URL;

    useEffect(() => {
        const googleAuth = () => {

            axios.get(`${api_url}/api/oauth/google?code=${code}`)
                .then(res => {
                    localStorage.setItem('token', res.data.token);
                    router.push('/');
                })
                .catch(err => console.error(err))
        }

        googleAuth();
    }, [])


    return (
        <div>
        </div>
    )
}

export default GooglePage;
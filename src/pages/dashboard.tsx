import { NextPage } from "next";
import { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import Router from 'next/router'

const Dashboard: NextPage = () => {
    useEffect(()=> {
        const token = localStorage.getItem('token')
        if(!token){
            Router.push('/')
        }
    },[])
    return (
        <>
            <MainLayout>
                <h1>dashboard</h1>
            </MainLayout>
        </>
    )
}

export default Dashboard
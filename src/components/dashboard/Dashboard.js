import React from "react";
import { Outlet } from 'react-router-dom';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Suspense } from 'react';
import Spinner from "../spinner/Spinner";

const Dashboard = () => {
    return (
        <>
            <Header />
                <Suspense fallback={<Spinner />}>
                    <Outlet />
                </Suspense>
            <Footer />
        </>
    )
}
export default Dashboard;
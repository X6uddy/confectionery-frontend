import React from "react";
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Spinner from "../spinner/Spinner";
import Header from "../header/header";
import Footer from "../footer/Footer";

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
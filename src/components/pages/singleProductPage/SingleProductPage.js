import React from "react";
import { useParams } from "react-router-dom";

import './SingleProductPage.scss';


const SingleProductPage = () => {

    const {productId} = useParams();

    return(
        <h1>
            SingleProductPage<br />
            This produt is {productId}
        </h1>
    )
}
export default SingleProductPage
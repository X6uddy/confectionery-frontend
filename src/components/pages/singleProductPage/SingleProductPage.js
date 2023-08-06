import React from "react";
import './SingleProductPage.scss'
import { useParams } from "react-router-dom";


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
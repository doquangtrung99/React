import React from "react";
import './Mainproject.scss'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const Mainproject = () => {
    const navigate = useNavigate();
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'))
    const logout = () => {
        setAccessToken('false')
        localStorage.setItem('accessToken', false)
        navigate('/singleproduct')
    }


    return (
        <>
            {
                accessToken === 'true' &&
                <>
                    <div style={{ color: 'black' }}>
                        <SingleProduct />
                    </div>
                </>
            }
        </>

    )

}
export default Mainproject
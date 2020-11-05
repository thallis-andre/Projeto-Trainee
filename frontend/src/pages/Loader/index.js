import React, { useState, useEffect, useContext } from 'react';




import './styles.css';
import { useLoader } from '../../context/loader';

export default function Loader() {

    const { loader, setLoader } = useLoader()



    return loader == false ? null : (
    // return (
        <>
            <div class="loading">
                <span class="pokeposition">
                    <i class="ball"></i>
                </span>
                <p>loading...</p>
            </div>
            <div class="bg"></div>
        </>

    )
}

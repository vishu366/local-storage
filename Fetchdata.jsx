import React, { useEffect, useState } from "react";
import axios from "axios";

function Fetchdata(){
    const[quote, setQuote]= useState('');
    useEffect(()=> {
        axios.get()
        .then(Response => {
            console.log(Response);
        })
    },  [])
    return(
        <>
        <h2>fetch data</h2>
      
        </>
    )
}
export default Fetchdata;
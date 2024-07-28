import React, { useState } from "react";
import axios from "axios";

function Catfacts() {
    const [fact, setFactdata] = useState('')
    const[image, setImage]= useState('')

    function fetchdata() {

        axios.get('https://catfact.ninja/fact')
            .then(Response => {
                setFactdata(Response.data.fact)

                console.log(Response);

            })

            
    }
    function fetchimage(){
        axios.get('https://api.thecatapi.com/v1/images/search')
        .then(Response => {
            console.log(Response);
            setImage(Response.data[0].url)
        })
    }
    return (
        <>
            <h2>fetch cat data</h2>
            <button onClick={fetchdata}>fetch data</button>

            <p>{fact}</p>
            {/* <p>{Response.data.length}</p> */}
            <div>
           
            <img src={image} alt="" />
            <br /><br />
            <button onClick={fetchimage}>fetch image</button>

            </div>

            

        </>
    )
}
export default Catfacts
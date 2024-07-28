import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Dogimage() {
    const [dogimage, setDogimage]= useState([]);
    useEffect(()=> {
   
      axios.get('https://dog.ceo/api/breeds/image/random')
      .then(Response => {
          console.log(Response);
          setDogimage(Response.data.message);
      })
      // alert('dog image was genrated')
    
      
    }, [])

  
    
  return (
    <div>
        <h1>dog image genrater</h1>
        <img src={dogimage} alt="" />

        <div>
          <ul>
          
          </ul>

       
          
       
         
        </div>

      
        
      
    
        <br /><br />
      

      
    </div>
  )
}

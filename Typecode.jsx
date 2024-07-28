import React, { useEffect, useState } from 'react'

export default function Typecode() {
  const [userdata, setUserData] = useState([]);
  console.log(userdata);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(Response => Response.json())
      .then(data => setUserData(data))
  }, [])
  return (
    <div>
      <ul>
        {userdata.length > 0 ? (
          userdata.map((item, index)=> (
            <p key={index}> {item.title}</p>
          ))
        ): (
          <p>loading ....</p>
        )}
  
        

      </ul>


    </div>
  )
}

import React, {useEffect,useState} from 'react'
import axios from 'axios'

export default function Dogimage() {
    const [image, setImage] = useState(" ")
    
    useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then((response) => setImage(response.data.message))
    },[]

    )


   return (
    <div>
        <h1>Get Image on refresh</h1>
        <img 
         src={image}
         height="300px"
         width="300px"
         alt="dog"
         />
    </div>
   )
}
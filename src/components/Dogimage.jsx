import React, {useEffect,useState} from 'react'

export default function Dogimage() {
    const [image, setImage] = useState(" ")
    useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((data) =>data.json())
    .then((response) => setImage(response.message))
    },[]

    )


   return (
    <div>
        <h1>Get Image on refresh</h1>
        <img 
         src={image}
         height="300px"
         width="300px"
         alt="dog image"

         />
    </div>
   )
}
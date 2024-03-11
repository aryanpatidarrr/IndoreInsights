// import React from "react";
// import {useEffect , useState} from 'react'
// export default function sample(){

//     const[data , setData] = useState([]);
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'd3691571c8msh6442b0b5e277e38p199764jsn7fb44f099b0a',
//             'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
//         }
//     };
    
// useEffect(()=>{
//     const fetchhotelData = async() =>{
//    await  fetch('https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=Indore', options)
//         .then(response => response.json())
//         .then(response => {
//             setData(response);
//             console.log(response)})
//         }
//         fetchhotelData();
// }, [])


// }
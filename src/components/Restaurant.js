import React from 'react'
import './Popular.css'
import PlaceDetail from './PlaceDetail'
import Navbar1 from './Navbar/Navbar1'
export default function Hotel1({ place }) {


  return (
    <>
      <Navbar1 />
      <div className='container'>
      <h1 className='text-center my-6' style={{ marginTop: '10rem', marginBottom: '3rem' }}>Indulge in Culinary Excellence: Discover the Best Restaurants in Indore</h1>
      <p className='text-center my-5' style={{ marginTop: '3rem', marginBottom: '3rem' }}> Welcome to our curated selection of the top hotels in Indore, where luxury meets comfort, and hospitality knows no bounds. Indore, the heart of Madhya Pradesh, is a city of vibrant culture and bustling business, and we are delighted to present a handpicked list of hotels that cater to every traveler's preferences. </p>
      </div>
      <div className='container'>
        <div className='row'>
        {place.map((place) => {
          return <div className='col-md-4'>
          <PlaceDetail place={place} />
          </div>
       })}
      </div>
      </div>
    </>
  )
}

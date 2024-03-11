import React from 'react'
import rajwada1 from './images/rajwada1.jpg'
import Navbar1 from './Navbar/Navbar1'

export default function Rajwada() {
  return (
   <>
   <Navbar1/>
  <div className='container'>
   <img src={rajwada1} alt='...'/>
   <h2>Rajwada</h2>
  </div>
   </>
  )
}

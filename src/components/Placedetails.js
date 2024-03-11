import React from 'react'

export default function Placedetails({place}) {
    // let { title, description, url, newsurl, date, author, source } = props
  return (
    <>
     <div class="places-text">
                <small>FEATURED TOURS PACKAGES</small>
                <h2>Favourite Places</h2>
            </div>
            <div class="places">
                <div class="card">
                    <div class="zoom-img">
                        <div class="img-card">
                            <img
                                src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293736/james-wheeler_xqmq2y.jpg"/>
                        </div>
                    </div>
                    <div class="text">
                        <span class="rating">⭐⭐⭐⭐⭐</span>
                        <h2>The Dark Forest Adventure</h2>
                        <p class="cost">$1870 / Per Person</p>
                        <div class="card-box">
                            <p class="time">🕓 3 Days</p>
                            <p class="location">✈ Vancouver, Canada</p>
                        </div>
                    </div>
                </div>
                </div>
    </>
  )
}

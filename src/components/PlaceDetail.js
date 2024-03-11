import React from 'react'
// import './PlaceDetail.css'
// import  './Popular.css'
export default function PlaceDetail({ place }) {
    // if (!place || !place.) {
    //     return <div>Loading...</div>;
    //   }
    return (
        // <>
        //  <div className='container'>
        //  <div className='firstplace'>
        //             <div className='firsttext'> <h2 className='heading'>{place.name}  </h2>
        //                 <p><i class='fas fa-map-marker-alt'></i> {place.address}</p>
                
        //             </div>
        //             <div className='fimage'>
        //                 <img src={place.photo? place.photo.images.large.url : "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className='img' alt='...' />
        //             </div>

        //         </div>
        //  </div>
        // </>
        <div>
        <div className="card" >
            <img src={place.photo? place.photo.images.large.url : "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{place.name}</h5>
                <p><i class='fas fa-map-marker-alt'></i> {place.address}</p>
                {/* <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
                <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a> */}
            </div>
        </div>
    </div>
    )
}

import React  from 'react'
// import { getPlaceData } from '../api'
import  './Popular.css'
import essentia from './images/essentia.jpg'
// import logo from './logo.png'
import Navbar1 from './Navbar/Navbar1'

export default function Hotel() {
     
    // const [place , setPlace] = useState([]);

    // useEffect(()=>{
    //    getPlaceData()
    //    .then((data)=>{
    //     console.log(data);
    //     setPlace(data);
    //    })
    // } , [])

  return (
  <>
  <Navbar1/>
  <div className='container'>
                <h1 className='text-center my-6' style={{ marginTop: '10rem', marginBottom: '3rem' }}>Discover Indore's Finest Accommodations</h1>
                <p className='text-center my-5' style={{ marginTop: '3rem', marginBottom: '3rem' }}> Welcome to our curated selection of the top hotels in Indore, where luxury meets comfort, and hospitality knows no bounds. Indore, the heart of Madhya Pradesh, is a city of vibrant culture and bustling business, and we are delighted to present a handpicked list of hotels that cater to every traveler's preferences. </p>
                <div className='firstplace'>
                    <div className='firsttext'> <h2 className='heading'>1. Sayaji  </h2>
                        <p>Hotel Sayaji Indore is a comfortable and well-maintained hotel in Indore, India. The rooms are clean and spacious, providing a pleasant stay for guests. The hotel offers a range of amenities including a restaurant, bar, sauna, fitness centre, business centre, laundry facilities, and an outdoor pool.</p>

                    </div>
                    <div className='fimage'>
                        <img src="https://q-xx.bstatic.com/xdata/images/hotel/max1200/423327202.jpg?k=52850dfec63539211314f27811d66971a705f23c85419d2e8c716b0aa48db18a&o="  className='img' alt='...' />
                    </div>

                </div>
                <div className='secondplace'>
                    <div className='fimage'>
                        <img src={essentia} className='img' alt='...' />
                    </div>
                    <div className='secondtext'> <h2 className='heading'>2.Essentia </h2>
                        <p>Located in Indore, 4.3 km from Indore Junction Station, Essentia Luxury Hotel Indore provides accommodation with an outdoor swimming pool, free private parking, a fitness centre and a garden. Among the facilities of this property are a restaurant, a shared lounge and room service, along with free WiFi throughout the property. </p>

                    </div>
                </div>
                <div className='firstplace'>
                    <div className='firsttext'> <h2 className='heading'>3. Indore Marriott Hotel  </h2>
                        <p>Featuring a fitness centre and garden, Indore Marriott Hotel is a hotel is set in Indore, 5 km from ISKCON Indore. Among the various facilities of this property are a bar and on-site dining. The tour desk is available to assist guests in planning their days out. Free parking is available.</p>

                    </div>
                    <div className='fimage'>
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/461653144.jpg?k=56f754191b484584daef8db9cf251936f841cfc90569e75f09a36196d7bc4f68&o=&hp=1"  className='img' alt='...' />
                    </div>
                </div>
                <div className='secondplace'>
                    <div className='fimage'>
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/465567825.jpg?k=56a0100e48ce38af343dfb26b2af66b601808ed4f427849d4e717785713e9924&o=&hp=1" className='img' alt='...' />
                    </div>
                    <div className='secondtext'> <h2 className='heading'>4.Sheraton Grand Palace Indore</h2>
                        <p>Boasting a combination of Greek and Antique Roman architecture, Sheraton Grand Palace Indore offers 115 rooms and suites in Indore. The hotel boasts lush gardens, a restaurant and modern meeting venues. </p>

                    </div>
                </div>
                <div className='firstplace'>
                    <div className='firsttext'> <h2 className='heading'>5. WOW Hotel  </h2>
                        <p>Visiting Indore to rejuvenate yourself away from the crowd of the city or on a business trip or for a vacation with your friends and family? WOW Hotel - A luxury boutique hotel is one of the best properties you should consider. Featuring an on- site dining option, a 24 hour front desk service, spacious rooms with comfortable beds and modern facilities, the property is preferred by many.</p>

                    </div>
                    <div className='fimage'>
                        <img src="https://www.holidify.com/images/cmsuploads/compressed/234795740_20220223175637.jpg"  className='img' alt='...' />
                    </div>
                </div>
                <div className='secondplace'>
                    <div className='fimage'>
                        <img src="https://www.holidify.com/images/cmsuploads/compressed/232826302_20221124223524.jpg" className='img' alt='...' />
                    </div>
                    <div className='secondtext'> <h2 className='heading'>6.Radisson Blu Hotel, Indore</h2>
                        <p>The Radisson Blu Hotel in Indore is an absolute gem, offering exceptional hospitality and a luxurious ambiance. The hotel's location in the heart of the city provides easy access to major attractions and public transportation. The spacious and well-maintained rooms are comfortable and equipped with all necessary amenities.</p>

                    </div>
                </div>
                <div className='firstplace'>
                    <div className='firsttext'> <h2 className='heading'>7. Hotel Winway  </h2>
                        <p>If you are visiting Indore and looking for a luxurious stay experience, then we have got the perfect property for you. Hotel Winway offers its guests with elegant décor, several on- site dining options, a 24 hour front desk service, a tour desk and other amenities that makes it quite popular among the guests.</p>

                    </div>
                    <div className='fimage'>
                        <img src="https://www.holidify.com/images/cmsuploads/compressed/203224551_20220223171514.jpg"  className='img' alt='...' />
                    </div>
                </div>
                <div className='secondplace'>
                    <div className='fimage'>
                        <img src="https://www.holidify.com/images/cmsuploads/compressed/93156876_20221125041244.jpg" className='img' alt='...' />
                    </div>
                    <div className='secondtext'> <h2 className='heading'>8.The Red Maple Mashal</h2>
                        <p>An opulent sojourn set close to Indore, The Red Maple Mashal enriches your holiday experience in this resplendent city and is counted amongst one of the best resorts in Indore. It comprises of plush cottages replete with amenities for a comfortable stay.</p>

                    </div>
                </div>
                <div className='firstplace'>
                    <div className='firsttext'> <h2 className='heading'>9. Lemon Tree Hotel  </h2>
                        <p>Located in the heart of Indore, Lemon Tree Hotel offers budget-friendly accommodation with spacious and clean rooms. The hotel provides a range of amenities including a restaurant, bar, fitness centre, business centre, laundry, dry cleaning, and free parking. </p>

                    </div>
                    <div className='fimage'>
                        <img src="https://q-xx.bstatic.com/xdata/images/hotel/max1200/35290707.jpg?k=645f28d71890a21a7ec75df2bf6d5c79aff36dc6f6a93c93d31518f4cce57780&o="  className='img' alt='...' />
                    </div>
                </div>
                </div>

  </>
  )
}

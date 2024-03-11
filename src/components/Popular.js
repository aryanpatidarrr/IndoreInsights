import React from 'react'
import Navbar1 from './Navbar/Navbar1'
import rajwada from './images/rajwada.png'
import gandhihall from './images/gandhihall.jpg'
import Laalbagh from './images/Laalbagh.jpg';
import Khajrana from './images/Khajrana.png'
import './Popular.css'

export default function Popular() {
    return (
        <>
            <Navbar1 />
            <div className='container'>
                <h1 className='text-center my-6' style={{ marginTop: '10rem', marginBottom: '3rem' }}>Discover the Enchanting Charms of Indore's Popular Destinations</h1>
                <p className='text-center my-5' style={{ marginTop: '3rem', marginBottom: '3rem' }}> Welcome to our guide to the captivating city of Indore, where every corner boasts a unique blend of heritage, culture, and modernity. Indore's popularity as a tourist destination is no accident; it's a result of the city's rich history, delectable cuisine, and a plethora of attractions waiting to be explored</p>
                <div className='firstplace'>
                    <div className='firsttext'> <h2 className='heading'>1. Rajwada Palace</h2>
                        <p>Rajwada is a magnificent and historical palace that is located in the city of Indore and was constructed by the Holkars more than 200 years ago. It is a seven-storied structure located near the Chhatris and serves as an excellent example of royal grandeur and architectural skills. 
                        </p>
                        <a href='rajwada'><button className='btn btn-primary'>View More</button></a>
                        
                    </div>
                    <div className='fimage'>
                        <img src={rajwada} className='img' alt='...' />
                    </div>

                </div>
                <div className='secondplace'>
                
                <div className='fimage'>
                    <img src={gandhihall} className='img' alt='...' />
                </div>
                <div className='secondtext'> <h2 className='heading'>2. Gandhi Hall </h2>
                    <p>A testament of awe-striking Indo-Gothic architecture, the Gandhi Hall was named so after the passing of our great father of the nation - Mahatma Gandhi. Made of white marble and Seoni and red stones, the grandiose of this monument is simply majestic.</p>

                </div>
                </div>
                <div className='firstplace'>
                    <div className='firsttext'> <h2 className='heading'>3. LaalBagh Palace</h2>
                        <p>Resided by the rulers of the Holkar dynasty, the Lal Bagh Palace is class and grandeur personified. The palace is spread on a sprawling area of 28 acres and reflects the taste of the rulers of the Holkar dynasty.</p>
                        
                    </div>
                    <div className='fimage'>
                        <img src={Laalbagh} className='img' alt='...' />
                    </div>

                </div>

                <div className='secondplace'>
                <div className='fimage'>
                    <img src="https://static.wixstatic.com/media/c46d97_f3837296dfb74c66bbfe637c3da0dd8c~mv2.jpg/v1/fill/w_640,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c46d97_f3837296dfb74c66bbfe637c3da0dd8c~mv2.jpg" className='img' alt='...' />
                </div>
                <div className='secondtext'> <h2 className='heading'>4.Sarafa Bazar </h2>
                    <p>The lip-smacking flavours of the food stalls in Sarafa Bazaar are a testimony to Indore's legendary love affair with food. Entertaining over 3000 visitors every day, the Sarafa Bazaar houses stalls that sell vividly coloured artificial jewellery, brass ornaments and mouth-watering dishes of the diverse cuisine of Indore. There are more than 50 dishes available here at extremely low rates.</p>

                </div>
                </div>
                <div className='firstplace'>
                    <div className='firsttext'> <h2 className='heading'>5. Khajrana Temple</h2>
                        <p>The Khajrana Ganesh temple is one of the most powerful shrines of the Lord Ganesha. It was built by Rani Ahilyabai Holkar to safeguard the idol of Lord Ganesha from Aurangzeb. The temple has since grown from being housed in a small hut to a big temple with large inner and outer sanctums.</p>
                        
                    </div>
                    <div className='fimage'>
                        <img src={Khajrana} className='img' alt='...' />
                    </div>

                </div>

                <div className='secondplace'>
                <div className='fimage'>
                    <img src="https://www.trawell.in/admin/images/upload/164055318Indore_Kaanch_Mandir_Main.jpg" className='img' alt='...' />
                </div>
                <div className='secondtext'> <h2 className='heading'>6.Kanch Mandir </h2>
                    <p>The Kanch Mandir, also known as the "Glass Temple," is a unique and exquisitely crafted Jain temple located in the city of Indore, Madhya Pradesh, India. This temple is renowned for its stunning glasswork and intricate mirror mosaics that adorn the temple's interior and exterior. </p>

                </div>
                </div>

                <div className='firstplace'>
                    <div className='firsttext'> <h2 className='heading'>7. Phooti Kothi</h2>
                        <p>Phooti Kothi, meaning 'broken palace' in Hindi, is a half-completed, abandoned royal residence located in Sudama Nagar in south-west Indore. The building is the only example of incomplete Holkar architecture, with construction starting in 1886, and being abandoned in 1902. At present, the building lies barren, and is said to be 'cursed' and 'haunted' according to local legend, which believes that the site was doomed from the start </p>
                        
                    </div>
                    <div className='fimage'>
                        <img src="https://map.sahapedia.org/admin/assets/images/202202918271734IMG_8434.jpg " className='img' alt='...' />
                    </div>

                </div>

                <div className='secondplace'>
                <div className='fimage'>
                    <img src="https://as1.ftcdn.net/v2/jpg/05/36/14/96/1000_F_536149657_yeExrw8oL9m4iNN1PEQN0VSZQePb5PCR.jpg" className='img' alt='...' />
                </div>
                <div className='secondtext'> <h2 className='heading'>8.Krishnapura Chhatri </h2>
                    <p>The Krishnapura Chhatri are distinct from Chhatri Bagh, which form two groups of chhatri dedicated to further Holkar rulers in Indore. The first honours Malhar Rao Holkar, Male Rao Holkar, Khande Rao Holkar, Tukoji Rao I, Malhar Rao Holkar I, Tarabai Holkar, Snehalata Raje and Indirabai Holkar. </p>

                </div>
                </div>

                <div className='firstplace'>
                    <div className='firsttext'> <h2 className='heading'>9.Chhappan Dukaan</h2>
                        <p>Chhappan Dukaan is one of Indore's choicest street food hubs that serve specials, chaat, idli and dosa with equal gusto. Chhappan Dukaan literally means fifty-six shops. At the time when it was established, 56 separate shops were started here, all selling food items. The evenings light the place up like nothing else with people consuming the delectable spread with enthusiasm</p>
                        
                    </div>
                    <div className='fimage'>
                        <img src="https://travelophia.com/wp-content/uploads/2023/02/Chappan-Dukan.jpg" className='img' alt='...' />
                    </div>

                </div>

                <div className='secondplace'>
                <div className='fimage'>
                    <img src="https://www.hillstationboss.com/wp-content/uploads/2017/03/ralamandal-wildlife-sanctuary.jpg" className='img' 
                    alt='...' />
                </div>
                <div className='secondtext'> <h2 className='heading'>10.Ralamandal Wildlife Sanctuary
                 </h2>
                    <p>Ralamandal Wildlife Sanctuary, located in the outskirts of Indore, Madhya Pradesh, India, is a tranquil and scenic natural reserve known for its lush greenery and diverse wildlife.</p>
                </div>
                </div>
            </div>

        </>
    )
}

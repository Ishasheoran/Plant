import cactus from './assets/cactus.webp'
import review from './assets/revieww.webp'
import { FaStar,FaStarHalf } from "react-icons/fa";
import best from './assets/best.webp'
import {PlantCard,CustomerCard} from './PlantCard.jsx'
import Navbar from './Navbar.jsx'
import trendy from './assets/trendy.webp'
import './App.css'
import {Banner,Testimonal} from './Banner.jsx'
import Footer from './Footer.jsx'
// import Testimonal from './Testimonal.jsx'
// import CustomerCard from './CustomerCard.jsx';
export default function Home() {
  return (<>
<Navbar />
 <Banner />
  <div className='section-title'>Our Trendy plants</div>
 <Testimonal />
   <div className="review">
       <div className='Intro'><img src={review} alt="" width="64px" height="64px" /> <div><h2>Shelly Russel</h2><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></div></div>
       <p>I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
     </div>
     <div className='section-title'>Our Top Selling Plants</div>
 <div className="cards">
<PlantCard 
  image={best}
  title="Aglaonema Plant"
  description="The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care" price ="300" />
<PlantCard
  image={trendy}
  title="Plantain Lilies"
  description="Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes," price ="380"
/>
  <PlantCard
        image={cactus}
        title="Cactus"
        description="It is known for their ability to thrive in arid environments"
        price="259"
      />
 </div>
  <div className="cards">
<PlantCard
  image={best}
  title="Aglaonema Plant"
  description="The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care" price ="300"/>
<PlantCard
  image={trendy}
  title="Plantain Lilies"
  description="Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes," price ="380"
/>
  <PlantCard
        image={cactus}
        title="Cactus"
        description="It is known for their ability to thrive in arid environments"
        price="259" 
      />
 </div>
   <div className='section-title'>Customer Review</div>
 <div className="cards">
  <CustomerCard img={review} name="Shelly Russel" Comment="Just got my hands on some absolutely awesome plants, and I couldn’t be happier!"/>
 
 <CustomerCard img={review} name="Lula Rolfson" Comment="Just got my hands on some absolutely awesome plants, and I couldn’t be happier!"/>
 <CustomerCard img={review} name="Carol Huels" Comment="Just got my hands on some absolutely awesome plants, and I couldn’t be happier!"/>
 </div>
  <div className='section-title'>Our  Best o2</div>
  <div className="best">
<img src={best} alt="" />
<div><h2>We Have Small And Best O2 Plants Collection’s</h2>
    <p>Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
     <br /> Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
    </p>
   
    <button>Explore</button></div>
  </div>

 <Footer />
    </>

  )}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

import trendy from './assets/trendy.webp'
import tred from './assets/tredd.webp'
import { PiPlayCircleThin } from "react-icons/pi";
import best from './assets/best.webp'

export function Testimonal(){
    return(<>
      <div className='Trend'>
    <img src={trendy} alt="plt" />
    <div><div className='fact'><h2>For Your Desks Decorations</h2>
    <p>I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
    <h2>Rs. 599/-</h2>
    <button>Explore</button></div></div>
    
    </div> <div className='Trend'>
   
    <div><div className='fact'><h2>For Your Desks Decorations</h2>
    <p>The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming</p>
    <h2>Rs. 399/-</h2>
    <button>Explore</button></div></div> <img src={tred} alt="plt" />
    
    </div>
    </>)
}


export function Banner(){
  return(<>
   <div className="HeroBanner">      <div className="banner">
      <h1>Earth's Exhale</h1>
      <p>"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>
      <div className="buy"><button>Buy Now</button><PiPlayCircleThin /><p>Live Demo...</p></div>
    </div>

<div className='sir'>     <div className="exp"></div> <div className='content'>
      <img src={best} alt="" width="85%"/>
      <p>Indoor Plant </p>
      <h2>Aglaonema  plant</h2>
      <button>Buy Now</button></div></div>
      </div>
  </>)
}
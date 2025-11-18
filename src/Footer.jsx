import logo from './assets/logoo.webp'
export default function Footer(){
    return(<>
    <div className="foot"  loading="lazy"><div className='about'><div className="logo"><img src={logo} alt="plt" loading="lazy"/>FloraVision.</div>
    <p>"From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."</p></div>
    <div className='links'>
      <h2>Quick Link's</h2>
      <li>Home</li>
      <li>Type’s Of plant’s</li>
      <li>Contact</li>
      <li>Privacy</li>
    </div><div className="back">
      <h2>ForEvery Update.</h2>
      <div className="input-wrapper">
      <input type="text" name="text" className="input" placeholder="Enter Email" />
      <button className="Subscribe-btn">   
        Subscribe
      </button>
    </div>
    </div>
    </div>
    <div className="footer">
      <h3>FB  TW  LI</h3>
      <p>FloraVision © all right reserve</p>
    </div>
    
    </>)
}
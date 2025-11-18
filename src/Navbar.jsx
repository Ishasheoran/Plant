
import logo from './assets/logoo.webp'
import { IoSearchOutline, IoBagHandleOutline  } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
export default function Navbar(){
  return(  <>
     <div className='Navbar'>
    <div className="logo"><img src={logo} alt="plt" />FloraVision.</div>
    <div className="pages"><li>Home</li>
    <li>Plants Type <MdOutlineArrowDropDown /></li>
    <li>More</li>
    <li>Contact</li></div>
    <div className='Search'> 
    <IoSearchOutline /><IoBagHandleOutline /><svg width="40" height="40" viewBox="0 0 24 24">
          <rect x="4" y="6" width="20" height="2" rx="1" fill="white" alignmentBaseline='right'/>
          <rect x="11.5" y="12" width="12" height="2" rx="1" fill="white" />
        </svg>
    </div>
      </div>
    </>)
}

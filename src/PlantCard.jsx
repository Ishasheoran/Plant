import { FaStar,FaStarHalf } from "react-icons/fa";

export  function PlantCard({ image, title, description, price }) {
  return (
    <div className="sir">
      <div className="exp" ></div>

      <div className="content">
        <img src={image} alt={title} width="80%"  loading="lazy" />

        <h2>{title}</h2>
        <p>{description}</p>

        <h3>Rs.{price}/-</h3>
      </div>
    </div>
  );
}
export  function CustomerCard({ img, name, Comment }) {
  return (
         
          <div className="customer"> <div className="exp" style={{height:"480px"}}></div>
           <div className="comment">  <div className='Intro'><img src={img} alt={name} width="88px" height="88px" loading="lazy"/> <div><h2>{name}</h2><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></div></div>
           <p>{Comment}</p></div></div>
       
 
  );
}


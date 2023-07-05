import { Link } from "react-router-dom";
import img from "../Assets/watering_hole-logo.png";

const Header = ()=>{
  return(
      <div id="headContainer">
         <div id="headerLeft">
          <Link to='/'>
         <img alt="img not fnd" src={img} />
         </Link>
          </div>

         {/* <div id="headerCenter">
          <input type="text"></input>
          <i className="fa fa-search"></i>
          </div>  */}


         <div id="headerRight">
          <div> <label className="icons"><Link to='/'>Home</Link></label>  </div>
          <div> <label className="icons"><Link to='/cart'>Cart</Link></label> </div>
          <div> <label className="icons"><Link to='/contact'>Contact</Link></label></div>
          </div> 

         
         

      </div>
  )

}

export default Header;



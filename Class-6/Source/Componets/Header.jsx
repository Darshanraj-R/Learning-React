

const Header = ()=>{
  return(
      <div id="headContainer">
         <div id="headerLeft">
         <img alt="img not fnd" src="https://thewateringhole.in/wp-content/uploads/2022/07/watering_hole-removebg-preview.png" />
          </div>

         <div id="headerCenter">
          <input type="text"></input>
          <i className="fa fa-search"></i>
          </div> 


         <div id="headerRight">
          <div className="icons"> <label>Home</label> <i className="fa fa-home"></i> </div>
          <div className="icons"> <label>Cart</label> <i className="fa fa-cart-plus"></i></div>
          <div className="icons"> <label>Menu</label> <i className="fa fa-bars"></i></div>
          
          </div> 

         
         

      </div>
  )

}

export default Header;



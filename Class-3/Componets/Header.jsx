import React from 'react'
import  './Header.css'

export default function Header() {
  return (
    <div className="container">
        
            <div className="left">
                
              <img src="https://elements-cover-images-0.imgix.net/7d63329f-ab20-4457-9eea-7caeeecc3f24?auto=compress%2Cformat&fit=max&w=900&s=304979a9584527e57f29c83ad01a9081" alt=""/>
                
            </div>


            <div className="middel" style={{backgroundColor:'#0b7dda'}}>
            <input type="search" name="" id="" />
            <i className='fa fa-search' ></i>
            </div>

            <div className="right">
            
            
            <div className='fa fa-home'></div>
            <div className='fa fa-bars'></div>
            <div className='fa fa-plane'></div>
        
           
            </div>
       
    </div>
  )
}

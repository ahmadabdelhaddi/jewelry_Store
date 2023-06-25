import React from 'react'
import './Category.css'
function Category(props) {
  return (
    <div>
     
         <div className='Category'> 
        <div className='images'>
        <img src={props.image} alt='pic'/>
      </div>
    
      <h1>{props.title}</h1>
      <hr className='hr1'></hr>
      <h3> See The Collection</h3>
      </div>
    </div>
  )
}

export default Category

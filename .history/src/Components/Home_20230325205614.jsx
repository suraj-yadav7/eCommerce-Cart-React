import React from 'react'

const Home = () => {
  return (
    <>
    <div className='home'>
    Home
    <ProductCard/>
    </div>
    
    </>
  )
}

const ProductCard = ({name,id, price, handler, imgSrc})=>(
  <div className='productCard'> 
  <img src={imgSrc} alt={name} />
  <p>{name}</p>
  <h4>${price}</h4>
  <button onClick={()=>handler()}>Add To Cart</button>
  </div>

)

export default Home

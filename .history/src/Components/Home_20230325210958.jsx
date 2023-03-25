import React from 'react'

const Home = () => {
  const productList = [
    {
    name:"macBook",
    price:50000,
    imgSrc:'img1',
    id:"fdsgdsfds4534"
  },
  {
    name:"iphone",
    price:80000,
    imgSrc:'img2',
    id:"fdsgdsfdds4534"
  },
  {
    name:"ipad",
    price:42999,
    imgSrc:'img3',
    id:"hfdafdsgdsfds4534"
  },
  ]

  const addToCartHandler = ()=>{
    console.log("The  add to cart handler")
  }
  return (
    <>
    <div className='home'>
    {
      productList.map((i)=>{
        <ProductCard key={i.id} id={i.id} imgSrc={i.imgSrc} name={i.name} price={i.price}  handler={addToCartHandler}/>
      })
    }
    </div>
    
    </>
  )
}

const ProductCard = ({name,id, price, handler, imgSrc})=>(
  <div className='productCard'> 
  <img src={imgSrc} alt={name} />
  <p>{name}</p>
  <h4>${price}</h4>
  <button onClick={()=>handler({name,price,id,quantity:1,imgSrc})}>Add To Cart</button>
  </div>

)

export default Home

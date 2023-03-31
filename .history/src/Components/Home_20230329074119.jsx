import React from 'react'
import { toast } from 'react-hot-toast'
import img1 from "../Assets/img1.jpg"
import img2 from "../Assets/img2.jpg"
import img3 from "../Assets/img3.jpg"
import {useDispatch} from "react-redux"

const Home = () => {
  const productList = [
    {
    name:"macBook",
    price:50000,
    imgSrc:img1,
    id:"afdsgdsfds4534"
  },
  {
    name:"iphone",
    price:80000,
    imgSrc:img2,
    id:"bfdsgdsfdds4534"
  },
  {
    name:"ipad",
    price:42999,
    imgSrc:img3,
    id:"cfdafdsgdsfds4534"
  },
  ]

  const dispatch = useDispatch()


  const addToCartHandler = (options)=>{
    console.log("The  add to cart handler")
    dispatch({type:"addToCart", payload:options} )
    toast.success("Added To Cart") 
  }
  return (
    <>
    <div className='home'>
    {
      productList.map((i)=>(
        <ProductCard key={i.id} id={i.id} imgSrc={i.imgSrc} name={i.name} price={i.price}  handler={addToCartHandler}/>
      ))
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

import React from 'react'
import { toast } from 'react-hot-toast'
import img1 from "../Assets/img1.jpg"
import img2 from "../Assets/img2.jpg"
import img3 from "../Assets/img3.jpg"
import img4 from "../Assets/img4.jpg"
import img5 from "../Assets/img5.jpg"
import img6 from "../Assets/img6.jpg"
import img7 from "../Assets/img7.jpg"
import {useDispatch} from "react-redux"

const Home = () => {
  const productList = [
    {
    name:"macBook Air",
    price:50000,
    imgSrc:img1,
    id:"afdsgdsfds4534"
  },
  {
    name:"iPad",
    price:80000,
    imgSrc:img2,
    id:"bfdsgdsfdds4534"
  },
  {
    name:"iPhone",
    price:42999,
    imgSrc:img3,
    id:"cfdafdsgdsfds4534"
  },
  {
    name:"Aplle Watch Ultra",
    price:8299,
    imgSrc:img4,
    id:"dfdafdsgdsfds4534"
  },
  {
    name:"Apple Airpods",
    price:8299,
    imgSrc:img5,
    id:"dfdafdsgdsfds4534"
  },
  {
    name:"Apple charger",
    price:8299,
    imgSrc:img6,
    id:"dfdafdsgdsfds4534"
  },
  {
    name:"Apple wirless headset",
    price:8299,
    imgSrc:img7,
    id:"dfdafdsgdsfds4534"
  },
  ]

  const dispatch = useDispatch()


  const addToCartHandler = (options)=>{
    console.log("The  add to cart handler")
    dispatch({type:"addToCart", payload:options} )
    dispatch({type:"calculate"})
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

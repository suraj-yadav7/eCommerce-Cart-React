import React from "react";
import {AiFillDelete} from "react-icons/ai"
import img1 from "../Assets/img1.jpg"

const Cart = () =>{
    return(
        <div className="cart">
            <democ/>
            <main>
                <h1>THis is main</h1>
                
                {
                <CartItem  
                imgSrc={img1}
                price={1000}
                name={"MacBook"}
                qnty={1}
                id={"sldflkm1"}
                />
                }
                </main>
            <aside>
                <h2>Subtotal : ${100}</h2>
                <h2>Tax : ${9}</h2>
                <h2>Shipping : ${10}</h2>
                <h2>Total : ${119}</h2>
            </aside>
        </div>
    )
}

const CartItem = ({imgSrc,price, name, qnty, decrement, increment, deleteHandler,id}) =>{
return(
<div className="cartItem">
    <img src={imgSrc} alt="#"/>
    <article>
        <h3>{name}</h3>
        <p>${price}</p>
    </article>
    <div>
        <button onClick={()=>decrement(id)}>-</button>
        <p>{qnty}</p>
        <button onClick={()=>increment(id)}>+</button>
    </div>
    <AiFillDelete onClick={()=> deleteHandler(id)}/>
</div>
)
}
const democ =({val})=>{
    return(
    <div>
    <h1>this is a demo div of cart {val}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, a. Totam quos vero iste! Totam laboriosam molestiae asperiores ipsa beatae, error sint corporis ipsam eum sit exercitationem sequi commodi fugit tempora cupiditate quos quas quasi animi unde culpa eligendi aut eaque, saepe corrupti? Commodi, alias!</p>
    </div>
     )

}

export default Cart
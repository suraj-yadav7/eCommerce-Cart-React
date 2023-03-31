import React from "react";
import {AiFillDelete} from "react-icons/ai"

const Cart = () =>{
    return(
        <>
        <div className="cart">
            <main><CardItem/></main>

            <aside>
                <h2>Subtotal : ${100}</h2>
                <h2>Tax : ${9}</h2>
                <h2>Shipping : ${10}</h2>
                <h2>Total : ${119}</h2>
            </aside>
        </div>
        </>
    )
};

const CardItem = ({imgSrc,price, name, qnty, decrement, increment, delete,id}) =>{
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
    <AiFillDelete />
</div>
}

export default Cart
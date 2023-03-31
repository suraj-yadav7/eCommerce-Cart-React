import React from "react";
import {AiFillDelete} from "react-icons/ai"
import img1 from "../Assets/img1.jpg"

const Cart = () =>{
    return(
        <>
        <demoDiv/>
        <div className="cart">
            <main>
                <CartItem  
                imgSrc={img1}
                price={1000}
                name={"MacBook"}
                qnty={1}
                id={"sldflkm1"}
                />
                </main>
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

const CartItem = ({imgSrc,price, name, qnty, decrement, increment, deleteHandler,id}) =>{
<div className="CartItem">
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
}
const demoDiv =()=>{
    <h1>this is a demo div of cart</h1>

}

export default Cart
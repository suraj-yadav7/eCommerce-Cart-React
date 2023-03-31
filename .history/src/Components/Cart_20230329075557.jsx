import React from "react";
import {AiFillDelete} from "react-icons/ai"
// import img1 from "../Assets/img1.jpg"
import {useDispatch, useSelector} from "react-redux"

const Cart = () =>{
    const {cartItems} = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const increment = (id)=>{
        dispatch({
            type:"addToCart",
            payload:{id}
        })
    }

    const decrement = (id)=>{

    }

    const deleteHandler = (id)=>{

    }

    return(
        <div className="cart">
            <main>     
                {
                cartItems.length>0 ? (
                    cartItems.map(i=>(
                        <CartItem  
                        imgSrc={i.imgSrc}
                        price={i.price}
                        name={i.name}
                        qnty={i.quantity}
                        id={i.id}
                        key={i.id}
                        increment={increment}
                        decrement={decrement}
                        deleteHandler={deleteHandler}
                        />
                    ))
                    
                ): <h1>No Items in the Cart</h1>
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

export default Cart
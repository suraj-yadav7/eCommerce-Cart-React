import {createReducer} from "@reduxjs/toolkit"

export const cartReducer = createReducer({
    cartItems:[],
    subTotal:0,
    shipping:0,
    tax:0,
    total:0,

},

{
    addToCart : (state,action)=>{
        const item = action.payload;
        const isItemExit = state.cartItems.find(i=>i.id===item.id);
        if(isItemExit){
        
        if(isItemExit){
            state.cartItems.forEach(i=>{
                if(i.id===item.id) i.quantity += 1
            })
        }

        }
        else{
            state.cartItems.push(item)
        }
    },

    decrement: (state,action)=>{
        const item = state.cartItems.find(i=>i.id===action.payload);
        if(item.quantity>1){
            state.cartItems.forEach((i)=>{
                if(i.id===item.id) i.quantity -=1
            })
        }
        
    },

    deleteHandler : (state,action)=>{
        state.cartItems = state.cartItems.filter((i) => i.id !==action.payload)
      
    },
    calculate:(state)=>{
        let sum=0
        state.cartItems.forEach((i)=> (sum +=i.price * i.quantity))
        state.subTotal = sum
        state.shipping =(state.subTotal > 500? 0 : 20);
        state.tax = +(state.subTotal * 0.18).toFixed(); //Here '+' will change string to number
        state.total = state.subTotal + state.shipping+state.tax        
    },
});
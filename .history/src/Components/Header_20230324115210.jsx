import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingBag} from "react-icons/fi"

const Header = () => {
  return (
 <>
 <nav>
    <h2>Logo here...</h2>
    <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
    </div>
 </nav>
 
 </>
  )
}

export default Header

import React from 'react'
import logo from '../../Assets/logo_big.png'
import DarkMode from './DarkMode'
import cart_icon from '../../Assets/cart_icon.png'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
    <div className='bg-purple-900 dark:bg-purple-500 py-5 px-6 text-white'>
  
      <div className='container flex justify-between items-center'>
        
          <div>
            <a href="#" className ='font-bold text-2xl sm:text-3xl flex gap-2'>
            <img src={logo}alt ="logo"className='w-10 uppercase'  height={100} width={100}/>FURNURA
            </a>
          </div>
          {}
           <div  className='flex justity-between items-center gap-4'>
           <div className='relative group hidden sm:block'>
            <input type="text"placeholder='search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border-gray-300 px-2 py-1 focus :outline-none focus:border-1  focus:border-primary orange-400'/>
            
            </div>
            </div>
            <button onClick={()=> alert("Ordering not available yet")}
              className="bg-gradient-to-r from-orange-400 to-secondary duration-200 text-white py-1 px-4 rounded-full flex item-center gap-3 group">
              <span className='group-hover:block hidden transition-allduration-200'
              >Order</span>
              <FaCartShopping className='text-xl text-whitedrop-shadow-sm cursor-pointer'/>
            </button>
    {/*darkmode switch*/}
<div>
  <DarkMode/>
  </div>        
  </div>
      </div>
      
      {/*menu*/}
      
      <div className='flex justify-center '>
        <div className='nav-menu'>
      <ul className="sm:flex hidden items-center gap-4">
        <li onClick={()=>{setMenu("homedecor")}}>Home Decor</li>
        <li onClick={()=>{setMenu("homedecor")}}>Living Room</li>
        <li onClick={()=>{setMenu("homedecor")}}>Bedroom</li>
        <li onClick={()=>{setMenu("homedecor")}}>Kitchen & Dining</li>
        <li onClick={()=>{setMenu("homedecor")}}>Product</li>
      </ul>
      </div>
    </div>
    <div className ="nav-login-cart">
    
    <Link to="/cart" className="flex items-center">
        <img src={cart_icon} alt="Cart" height={30} width={30} />
        <div className="nav-cart-count">0</div>
      </Link>
</div>
    </div>
    
  )
}

export default Navbar

import React from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
    // function Menu(e){
    //     let list = document.querySelector('ul');
    //     e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
    //   }
  return (
    <>
    <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
    <div className="flex justify-between items-center ">
      <span className="text-2xl font-[Poppins] cursor-pointer">
        shoprice
      </span>

      <span className="text-3xl cursor-pointer mx-2 md:hidden block">
        
      </span>
    </div>

    <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
      <li className="mx-4 my-6 md:my-0">
        <NavLink to="/"  
         className="text-xl hover:text-cyan-500 duration-500">HOME</NavLink>
      </li>
     
      <li className="mx-4 my-6 md:my-0">
        <NavLink to="/about" className="text-xl hover:text-cyan-500 duration-500">ABOUT</NavLink>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <NavLink to="store" className="text-xl hover:text-cyan-500 duration-500">STORE</NavLink>
      </li>
      

      <button className=" px-6  mx-20 bg-cyan-200 hover:bg-cyan-500 rounded-full p-4 h-16 w-16 ">
        <img src="src/assets/svg.png" alt="" />
        <div className='rounded-full bg-red-500 h-6 w-6 flex justify-center mt-3 absolute text-white translate-x-1/4'>3</div>
      </button>
<h2 className=""></h2>
    </ul>
  </nav>
    </>
  )
}

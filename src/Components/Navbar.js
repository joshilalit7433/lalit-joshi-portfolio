
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-scroll';
import Menu from './Menu';
import Close from './Close';



export default function Navbar() {

  const[btn,setbtn]=useState(false)
 
  const togglebtn=()=>{
    setbtn(!btn);
  }

 

  return (
    <>
    <div className="bg-black h-[80px]  fixed top-0 left-0 right-0 w-screen  ">
      
      <div className=" pt-6 lg:pl-[50px] flex justify-center lg:mr-[1100px] lg:pt-[10px]">
        <p className="font-logo text-white text-3xl font-extrabold tracking-widest lg:text-[50px]">Lalit Joshi</p>
      </div>

     
        <ul className=" hidden    lg:flex lg:justify-end  text-center  lg:pr-[50px] lg:mt-[-30px] text-white  text-2xl cursor-pointer font-bold   bg-black  ">
        <li className="hover:text-[#576CBC] lg:px-4 "  >
          <Link to='main' smooth={true} duration={500}  >
            HOME
          </Link>
        </li>

        <li  className="hover:text-[#576CBC] lg:px-4">
          <Link to='education' smooth={true} duration={500} >
            EDUCATION
          </Link>
        </li>

        <li  className="hover:text-[#576CBC] lg:px-4">
          <Link to='skills' smooth={true} duration={500} >
          SKILLS
          </Link>
        </li>

        <li className="hover:text-[#576CBC] lg:px-4 "  >
          <Link to='projects' smooth={true} duration={500}  >
           PROJECTS
          </Link>
        </li>

        <li  className="hover:text-[#576CBC] lg:px-4">
          <Link to='contact' smooth={true} duration={500} >
           CONTACT
          </Link>
        </li>
        </ul>
      

     

      <div onClick={togglebtn} className="flex justify-end  pr-[20px] lg:hidden mt-[-27px] pb-[-100px] " >
      <button className="h-[25px] w-[25px]  "   >{btn ? <Close/> :  <Menu/> }</button>
      </div>


{btn && (
  <div >
<div  >
  <ul className={`  ${btn? <Menu/>:<Close/>} text-3xl pt-[20px] text-black  w-screen bg-white opacity-95  flex flex-col align-center items-center   h-screen  `}>
  <li  className="hover:text-[#576CBC] lg:px-4  my-[15px]">
          <Link onClick={togglebtn} to='main' smooth={true} duration={500} >
           HOME
          </Link>
        </li>

        <li  className="hover:text-[#576CBC] lg:px-4  my-[15px]">
          <Link onClick={togglebtn} to='education' smooth={true} duration={500}>
            EDUCATION
          </Link>
        </li>

        <li  className="hover:text-[#576CBC] lg:px-4  my-[15px]">
          <Link onClick={togglebtn} to='skills' smooth={true} duration={500} >
          SKILLS
          </Link>
        </li>

        <li  className="hover:text-[#576CBC] lg:px-4  my-[15px]">
          <Link onClick={togglebtn} to='projects' smooth={true} duration={500}>
            PROJECTS
          </Link>
        </li>

        <li  className="hover:text-[#576CBC] lg:px-4  my-[15px]">
          <Link onClick={togglebtn} to='contact' smooth={true} duration={500} >
           CONTACT
          </Link>
        </li>
  </ul>
  </div>
    </div>
  
)}

</div>
<hr/>

    </>
  )
}

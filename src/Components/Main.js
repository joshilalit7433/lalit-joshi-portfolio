import React from 'react'
import {useTypewriter,Cursor} from "react-simple-typewriter"

export default function Main() {

  const[typeeffect]=useTypewriter({
    words:["front-end developer.","Professional Coder.","Tech Enthusiast."],
    loop:{},
    typeSpeed:100,
    deleteSpeed:40
  })
  return (
    <>
    
    <div className="grid lg:grid-cols-2 lg:grid-rows-1 bg-[#000000]  pb-[50px]   grid-rows-2 pt-[100px] " id="main">

        <div className="pl-[30px] pt-[10px] lg:pl-[80px] lg:pt-[100px] mt-[10px]">
            <p className="text-2xl capitalize text-white lg:text-6xl">hello everyone welcome to my portfolio.</p>
            <p className="text-4xl capitalize text-white lg:text-7xl">i'm <b>Lalit Joshi a</b></p> 
           <p className="text-4xl capitalize text-white lg:text-7xl"> {typeeffect}</p>
        </div>

        <div className="mt-[-40px] flex justify-center  lg:pl-[200px] lg:pt-[100px] ">
          <img src='./Images/lalit.jpeg' className=" h-[280px] w-[280px] lg:h-[500px] lg:w-[500px] bg-white rounded-full  border-4 border-black"></img>
        </div>

    </div><hr/>
    </>
  )
}
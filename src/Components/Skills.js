import React from 'react'

export default function Skills() {
  return (
    <>

<div className="flex justify-center align-middle  bg-[#000000]  pb-[50px]  " id='skills'>
       <p className="text-4xl  text-white lg:text-5xl font-heading">SKILLS</p> 
    </div> 

    <div className="grid  grid-rows-3 grid-cols-2  bg-[#000000]  pl-[10px] pb-[50px] lg:grid lg:grid-rows-2  lg:grid-cols-3 lg:pl-[150px]  " id="skills">


        <div className="rounded-b-[20px] border-x-2 border-b-4    border-orange-500 hover:shadow-2xl hover:shadow-orange-500 pl-[30px] mt-[20px] w-[170px] lg:mt-[50px] lg:w-[300px]">
            <img src="./Images/html.png" alt='html' className="h-[120px] w-[120px] lg:h-[250px] lg:w-[250px]"></img>
            <p className="text-white text-xl pl-[35px] pt-[10px] pb-[10px] lg:text-3xl lg:pl-[80px]  lg:pt-[20px] lg:pb-[20px]">HTML</p>  
        </div>

        <div className="rounded-b-[20px] border-x-2 border-b-4    border-blue-500 hover:shadow-2xl hover:shadow-blue-500 pl-[30px] mt-[20px] w-[170px] lg:mt-[50px] lg:w-[300px]" >
            <img src="./Images/css.png" alt='css' className=" h-[120px] w-[120px] lg:h-[250px] lg:w-[250px]"></img>
            <p className="text-white text-xl pl-[45px] pt-[10px] pb-[10px] lg:text-3xl lg:pl-[100px]  lg:pt-[20px] lg:pb-[20px]">CSS</p>
        </div>
        <div className="rounded-b-[20px] border-x-2 border-b-4    border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500 pl-[30px] mt-[20px] w-[170px] lg:mt-[50px] lg:w-[300px]">
            <img src="./Images/js.png" alt='javascript' className=" h-[120px] w-[120px] lg:h-[250px] lg:w-[250px]"></img>
            <p className="text-white text-xl pl-[10px]  pt-[10px] pb-[10px] lg:text-3xl lg:pl-[45px] lg:pt-[20px] lg:pb-[20px]">JAVASCRIPT</p>
        </div>

        <div className="rounded-b-[20px] border-x-2 border-b-4    border-blue-400 hover:shadow-2xl hover:shadow-blue-400 pl-[30px] mt-[20px] w-[170px] lg:mt-[50px] lg:w-[300px]">
            <img src="./Images/react.png" alt='react js' className=" h-[120px] w-[120px] lg:h-[250px] lg:w-[250px]"></img>
            <p className="text-white text-xl pl-[25px] pt-[10px] pb-[10px] lg:text-3xl lg:pl-[60px] lg:pt-[20px] lg:pb-[20px]">REACT JS</p>
        </div>

        <div className="rounded-b-[20px] border-x-2 border-b-4    border-blue-300 hover:shadow-2xl hover:shadow-blue-300 pl-[30px] mt-[20px] w-[170px] lg:mt-[50px] lg:w-[300px]">
            <img src="./Images/tailwindcss.png" alt='tailwind css' className=" h-[120px] w-[120px] lg:h-[250px] lg:w-[250px]"></img>
            <p className="text-white text-xl pl-[1px] pt-[10px] pb-[10px] lg:text-3xl lg:pl-[30px] lg:pt-[20px] lg:pb-[20px]">TAILWIND CSS</p>
        </div>

        <div className="rounded-b-[20px] border-x-2 border-b-4    border-white hover:shadow-2xl hover:shadow-white pl-[30px] mt-[20px] w-[170px] lg:mt-[50px] lg:w-[300px]">
            <img src="./Images/github.png" alt='github' className=" h-[120px] w-[120px] lg:h-[250px] lg:w-[250px]"></img>
            <p className="text-white text-xl pl-[25px] pt-[10px] pb-[10px] lg:text-3xl lg:pl-[70px] lg:pt-[20px] lg:pb-[20px]">GITHUB</p>
        </div>
      
    </div><hr/>
    </>
  )
}

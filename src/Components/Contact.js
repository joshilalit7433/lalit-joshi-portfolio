import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="flex justify-center align-middle   bg-[#000000]  pb-[50px]  " id='contact'>
       <p className="text-4xl text-white lg:text-5xl font-heading"> CONTACT</p>
    </div> 

    <div className="grid grid-rows-2  bg-[#000000]  pb-[10px] lg:grid " >
        <div className=" pb-[50px] flex flex-col items-center justify-center">
            <p className="capitalize text-5xl text-white lg:text-4xl font-contact">find me on</p>
            <div className="flex pt-[25px] gap-x-8">
           <a href='https://www.linkedin.com/in/lalit-joshi-73ba50255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' ><img src="./Images/linkedin.png" alt="linkedin" className="h-[50px] w-[50px]"></img></a>
            <a href='https://github.com/joshilalit7433'><img src="./Images/github1.png" alt="github" className="h-[50px] w-[50px] bg-white"></img></a>
            <a href='https://www.instagram.com/lalitjoshiii?igsh=MTFoYmZta2Q5cWx5dg=='> <img src="./Images/instagram.png" alt="instagram" className="h-[50px] w-[50px]"></img></a>
            </div>
        </div>

       
   
    </div>
    </>
  )
}

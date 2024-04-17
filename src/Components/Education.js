import React from 'react'

export default function Education() {
  return (
    <>
    <div className="flex justify-center align-middle  bg-[#000000]  " id="education">
    <p className="text-4xl  text-white lg:text-5xl font-heading">EDUCATION</p> 
    </div> 

    <div className=" grid grid-rows-3 bg-[#000000]  pb-[50px] lg:grid lg:grid-rows-2  lg:grid-cols-2 lg:pl-[100px]" >

        <div className="  mt-[50px] bg-white h-[220px] w-[320px] ml-[20px] rounded-lg border-4 border-black lg:w-[550px] lg:pl-[40px]  " >
           <p className=" text-4xl underline text-[#002B5B] font-bold flex justify-center pb-4 ">School</p>
           <p className="text-xl font-bold pl-[10px] pb-[10px] lg:text-2xl  ">St Augustine High School Vasai West</p>
           <p className="text-xl font-bold pl-[10px] pb-[10px] lg:text-2xl ">2008-2020</p>
           <p className="text-xl font-bold pl-[10px] pb-[10px] lg:text-2xl ">Scored 84%</p>
        </div>

        <div className="  mt-[50px] bg-white h-[220px] w-[320px] ml-[20px] rounded-lg border-4 border-black lg:w-[550px] lg:pl-[40px] " >
           <p className=" text-4xl underline text-[#002B5B] font-bold flex justify-center pb-4 ">Junior College</p>
           <p className="text-xl font-bold pl-[10px] pb-[10px] lg:text-2xl ">New English College Vasai West</p>
           <p className="text-xl font-bold pl-[10px] pb-[10px] lg:text-2xl ">2020-2022</p>
           <p className="text-xl font-bold pl-[10px] pb-[10px] lg:text-2xl ">Scored 89%</p>
        </div>


        <div className="  mt-[50px] bg-white h-[220px] w-[320px] ml-[20px] rounded-lg border-4 border-black lg:w-[550px] lg:pl-[40px] " >
           <p className=" text-4xl underline text-[#002B5B] font-bold flex justify-center pb-4 ">Degree College</p>
           <p className="text-xl font-bold pl-[10px] pb-[10px] lg:text-2xl  ">Ghanshyamdas Saraf College Malad West</p>
           <p className="text-xl font-bold pl-[10px] pb-[10px] lg:text-2xl ">2022-2025</p>
           <p className="text-xl font-bold pl-[10px] pb-[10px] lg:text-2xl ">Loading...</p>
        </div>

        

      
        

    </div><hr/>
    </>
  )
}
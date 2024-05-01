import React from 'react'

export default function Projects() {
  return (
    <>
    <div className="flex justify-center align-middle  bg-[#000000]  pb-[50px]  " id='skills'>
       <p className="text-4xl  text-white lg:text-5xl font-heading">PROJECTS</p> 
    </div> 

    <div className=" grid grid-rows-2 pl-[40px] lg:grid lg:grid-rows-1 lg:grid-cols-2 lg:pl-[250px] bg-[#000000] lg:pb-[50px]">

        <div className="mb-[20px]">
            <div className=" h-[300px] w-[280px] border-4 border-blue-500 lg:h-[350px] lg:w-[350px] bg-white rounded-lg">
                <div>
                    <a href='https://tic-tac-toe-mocha-three-57.vercel.app/' target='_blank'><img src='./Images/tictactoe.png' alt='Tic-Tac-Toe' className=" h-[200px] w-[350px] lg:h-[200px] lg:w-[350px]"></img></a>
                </div>
                <p className=" pl-[15px] text-[25px] lg:pl-[15px] lg:pt-[15px] lg:text-[25px] lg:font-bold">Tic-Tac-Toe</p>
                <p className=" pl-[15px] text-[15px] lg:pl-[15px] lg:pt-[15px] lg:text-[15px] lg:font-medium ">ReactJs,Tailwind CSS,Html</p>

            </div>
        </div>

        <div className="mb-[20px]" >
            <div className="  h-[300px] w-[280px] border-4 border-blue-500 lg:h-[350px] lg:w-[350px] bg-white rounded-lg">
                <div>
              <a href='https://todo-list-flame-one-92.vercel.app/' target='_blank'  >  <img src='./Images/todo.jpg' alt='Todo List' className="lg:h-[200px] lg:w-[350px]"></img></a>
                </div>
                <p className=" pl-[15px] text-[25px] lg:pl-[15px] lg:pt-[15px] lg:text-[25px] lg:font-bold">Todo List</p>
                <p className=" pl-[15px] text-[15px] lg:pl-[15px] lg:pt-[15px] lg:text-[15px] lg:font-medium ">ReactJs,Tailwind CSS,Html</p>

            </div>
        </div>
        


    </div><hr/>
    </>
  )
}

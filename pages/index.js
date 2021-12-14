import Head from 'next/head'
import Navbar2 from '../components/navbar'
import { useEffect } from 'react'
import { useUserData } from '../lib/hooks'
export default function Home() {


 

  useEffect(()=>{

    
  },[])
  return (
    <div className="">
     
  
      <Navbar2/>



      <section className="w-full px-6 pb-12 antialiased bg-white">
          <div className="mx-auto max-w-full">

              

            
              <div className="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
                  <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-8xl"><span className="inline md:block font-black">Find Great places to work</span> <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block font-extrabold"> &amp; top employees to hire</span></h1>
                  <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">Find a dream job that perfectly matches your needs! Applying is just one click away!<br/> Make your job adverts stand out using our brand new features! Find the best match for your vacancy through FutureSeekers.lk</div>
                  <div className="flex flex-col items-center mt-24 text-center">
                      <span className="relative inline-flex w-full md:w-auto ">
                          <a href="#_" type="button" className="inline-flex items-center justify-center w-full px-8 py-4 text-2xl font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                              Hire employees &amp; post job adverts
                          </a>
                          <span className="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 font-bold leading-tight text-white bg-green-400 rounded-full text-base">only $15/mo</span>
                      </span>
                      <a href="#" className="inline-flex items-center justify-center w-full px-8 py-4 text-2xl font-bold leading-6 text-white bg-red-400 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-6">Signup to get employed</a>
                  </div>
              </div>
             

          </div>
      </section>

      
    </div>
  )
}

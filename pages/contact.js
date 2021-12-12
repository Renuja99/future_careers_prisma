import React from 'react'
import Navbar2 from '../components/navbar'

const contact = () => {
    return (
        <section className="">

            <Navbar2/>
  <div className="container px-4 mx-auto py-20">
    <div className="max-w-3xl mx-auto text-center">
      <span className="text-xs text-gray-200 uppercase">New Feature</span>
      <h2 className="mt-2 mb-4 text-4xl lg:text-5xl font-bold font-heading">You can directly reach us now.</h2>
      <p className="mb-6 text-lg text-gray-500 leading-loose">Let us know your suggestions or inquiries so that we can provide you a platform that you really like! We are always here to listen.</p>
      <div className="mb-12"><a className="inline-block w-full sm:w-auto px-6 py-2 text-sm text-white font-bold leading-loose bg-gray-500 hover:bg-gray-600 rounded transition duration-200" href="#">Contact Us</a></div>
      
<div className="flex justify-center bg-green-400 rounded-xl transform rotate-3" style={{width: "800px"}}>
<form className="flex items-center  space-x-3 transform -rotate-3" style={{width: "800px"}} >
    <div className=" px-5 py-10 m-auto mt-0 bg-gray-800 rounded-lg shadow dark:bg-gray-800" style={{width: "1000px"}}>
        <div className="mb-6 text-3xl font-bold text-center text-gray-300 dark:text-white">
            Contact us !
        </div>
        <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                    <input type="text" id="contact-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"/>
                    </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <div className=" relative ">
                        <input type="text" id="contact-form-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email"/>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label className="text-gray-700" for="name">
                            <textarea className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment" name="comment" rows="5" cols="40">
                            </textarea>
                        </label>
                    </div>
                    <div className="col-span-2 text-right">
                        <button type="submit" className="py-2 px-4  bg-green-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </form>
        </div>

    </div>
  </div>
</section>
    )
}

export default contact

import { Fragment, useState, useEffect } from 'react'
import {  Transition,Menu,RadioGroup  } from '@headlessui/react'
import Header from '../components/navbar'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import 'tailwindcss/tailwind.css'
import { BriefcaseIcon,
    
    CheckIcon,
    ChevronDownIcon,
    CurrencyDollarIcon,
    LinkIcon,
    LocationMarkerIcon,
    PencilIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'




const message = [
    {
        sender: 'gdg',
        senderEmail: 'gfgf',
        messageBody: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus at assumenda enim, culpa consequuntur corporis eaque reiciendis mollitia vero magnam qui quo porro, consectetur sapiente numquam quas facilis! Sapiente ipsa laborum tenetur ab at quas soluta dignissimos possimus '
    },

    {
        sender: 'gdg',
        senderEmail: 'gfgf',
        messageBody: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus at assumenda enim, culpa consequuntur corporis eaque reiciendis mollitia vero magnam qui quo porro, consectetur sapiente numquam quas facilis! Sapiente ipsa laborum tenetur ab at quas soluta dignissimos possimus '
    },
    {
        sender: 'gdg',
        senderEmail: 'gfgf',
        messageBody: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus at assumenda enim, culpa consequuntur corporis eaque reiciendis mollitia vero magnam qui quo porro, consectetur sapiente numquam quas facilis! Sapiente ipsa laborum tenetur ab at quas soluta dignissimos possimus '
    },
    {
        sender: 'gdg',
        senderEmail: 'gfgf',
        messageBody: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus at assumenda enim, culpa consequuntur corporis eaque reiciendis mollitia vero magnam qui quo porro, consectetur sapiente numquam quas facilis! Sapiente ipsa laborum tenetur ab at quas soluta dignissimos possimus '
    }
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const jobsearch = () => {

  const [inputOne, setInputOne] = useState();
  const [inputTwo, setInputTwo] = useState();
  const [ job_adverts, setJobAdverts] = useState();

   const handleSubmit= async(e)=>{

      try{
          
          e.preventDefault()
          let url = `/api/search/${inputOne}/${inputTwo}`
          const response = await fetch( url,{
            method: 'POST',
            headers:{
              'Content-Type':'application/json'
            }
          })

          const data = await response.json();

          setJobAdverts(data)
      }catch(err){
        console.log(err)
      }
    
   }


   useEffect(() => {
    
   }, [])

    return (

        <>
        


     <Header/>










    {/** Body */}
    <div className="flex flex-col items-center bg-gray-100">

    <div className=" flex flex-col items-center mt-96 shadow-md" style={{margin:'40px', background: '#fff',borderRadius:'20px'}}>
        

        <div className="flex justify-center mt-6 mb-0  m-48" style={{marginTop:'60px'}}>
            <form className="flex flex-col md:flex-row w-full md:w-full  max-w-full md:space-x-3 space-y-3 md:space-y-0 justify-center" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-6 relative  ">
                    <input type="text" id="&quot;form-subscribe-Subscribe" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-700 w-full lg:w-96 py-2.5 px-4 bg-white text-gray-700 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Job title, remote, company name" onChange={(e)=>setInputOne(e.target.value)}/>
                    <input type="text" id="&quot;form-subscribe-Subscribe" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-700 w-full lg:w-96 py-2.5 px-4 bg-white text-gray-700 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Location" onChange={(e)=>setInputTwo(e.target.value)}/>
                </div>
                    <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                        Find Jobs
                    </button>
            </form>
        
        </div>

                <div className="w-full lg:w-4/5 h-20 flex justify-center items-center gap-0" style={{ position: "relative", zIndex: "100", marginBottom: '20px'}}>






                        <div className="w-32 text-right">
                        <Menu as="div" className="relative inline-block text-left ">
                        <div>
                            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-100 text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                            Job Type
                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-xs'
                                    )}
                                    >
                                    Part-time
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-xs'
                                    )}
                                    >
                                    Full-time
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-xs'
                                    )}
                                    >
                                    Contract based
                                    </a>
                                )}
                                </Menu.Item>
                                <form method="POST" action="#">
                                <Menu.Item>
                                    {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block w-full text-left px-4 py-2 text-xs'
                                        )}
                                    >
                                        Sign out
                                    </button>
                                    )}
                                </Menu.Item>
                                </form>
                            </div>
                            </Menu.Items>
                        </Transition>
                        </Menu>

                        </div>












                        <div className=" w-48 text-right">
                        <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-100 text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                            Experience Level
                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-xs'
                                    )}
                                    >
                                    Mid-level
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-xs'
                                    )}
                                    >
                                    Senior-Level
                                    </a>
                                )}
                                </Menu.Item>
                                <form method="POST" action="#">
                                <Menu.Item>
                                    {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block w-full text-left px-4 py-2 text-xs'
                                        )}
                                    >
                                        Entry-level
                                    </button>
                                    )}
                                </Menu.Item>
                                </form>
                            </div>
                            </Menu.Items>
                        </Transition>
                        </Menu>

                        </div>

















                        <div className="w-32 text-right">
                        <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-100 text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                            Industry
                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-xs'
                                    )}
                                    >
                                    Healthcare
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-xs'
                                    )}
                                    >
                                    Technology
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-xs'
                                    )}
                                    >
                                    Transportation
                                    </a>
                                )}
                                </Menu.Item>
                                <form method="POST" action="#">
                                <Menu.Item>
                                    {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block w-full text-left px-4 py-2 text-xs'
                                        )}
                                    >
                                        Administrative and Customer Support
                                    </button>
                                    )}
                                </Menu.Item>
                                </form>
                            </div>
                            </Menu.Items>
                        </Transition>
                        </Menu>

                        </div>





                        

        

        </div>
    </div>
      










<div className="w-full  bg-gray-800 " style={{border: '1px solid rgba(229, 231, 235, var(--tw-bg-opacity))', marginBottom: '5px'}}></div>


<div className="flex max-h-screen w-full">


                                        







</div>


<main className="flex  max-h-screen  mb-20 pt-10  " style={{width: '1400px'}}>


<div className="relative flex flex-col w-full max-w-lg flex-grow  ">
        <div className="flex-shrink-0 px-4 py-2 border-b flex items-center justify-between">
          <button className="flex items-center text-xs font-semibold text-gray-600">
            Sorted by Date
            <span className="leading-loose h-6 w-6 stroke-current text-gray-500">
              <i className="fas fa-chevron-down ml-1"></i>
            </span>
          </button>
          <button>
            <span className=" h-6 w-6 stroke-current text-gray-500">
              <i className="fas fa-sort-amount-up"></i>
            </span>
          </button>
        </div>
        <div className="flex-1  mb-11">
          
          
          {/* message component */}

          {
                job_adverts ? (
                  job_adverts.map((m, index)=>{
                    return (
                    <div key={index} >

                      <button className="rounded-lg bg-white shadow-lg" id="message_component" style={{position:"relative", margin:'10px 5px'}} onClick={()=>{showMessage(m)}}>
                      <a className=" bg-white w-full  border-t flex flex-col rounded-lg" style={{ marginBottom:'10px',padding:'20px 30px', background: 'white', gap: "25px"}}>
                        
                      <p className="text-sm font-semibold text-gray-900 email__sender round" style={{ }}>{m.job_title}</p>
                          <div className="flex justify-between" >
                          <p className="text-sm text-gray-900" >{m.job_type_id}</p>
                          <p className="text-sm text-gray-500">{m.closing_date}</p>
                          </div>
                          <p className="text-sm text-gray-600 email__text">{m.job_description}</p>
                      </a>
                      </button>
                    </div>)
                  })

                ): <div className="flex justify-between"><span>Loading...</span> </div>
          }
          
         
                  
        </div>
      </div>

      <div className=" w-full h-screen flex-1 flex flex-col items-center">
      <div className="relative shadow-lg">
          <div className="flex items-center px-5 py-2 justify-between  border-b">
          
            <div className="flex items-center">
              <button className="ml-6">
                <span className="leading-normal">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                    </svg>
                </span>
              </button>
              <button className="ml-6">
                <span className="leading-normal">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                </span>
              </button>
            </div>
          </div>

        
          
        </div>
        <div className="p-3 flex-1 overflow-y-auto" style={{ width: '100%'}}>

          dgfgd
          
          <article className="mt-3 px-10 pt-6 pb-8 bg-white  rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              
            </div>
            <div className="mt-6 text-gray-800 text-sm">
              <p>
                fgsggfsssgfgd
              </p> 
              <p className="mt-4 w-full">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut repellendus, ex corrupti vero nulla numquam possimus molestias necessitatibus alias nostrum adipisci voluptas delectus eos ipsa ab est! Quidem, eum nulla!


                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id aperiam nostrum magnam aliquam dolorum ullam blanditiis sint doloribus fugiat impedit ratione ut labore accusantium voluptatibus, accusamus voluptatum reiciendis quisquam harum! Libero cupiditate enim placeat.

                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat iste voluptas odio cumque, a doloribus ea sapiente doloremque, officia ut deleniti praesentium magnam est iure, nemo temporibus labore maiores. Obcaecati placeat, quisquam voluptatem asperiores earum pariatur quos, ipsa quaerat ipsum dicta quidem explicabo illo reiciendis provident natus, fugit eveniet cupiditate. Vitae nisi possimus dolore ducimus sapiente quod distinctio sed rem expedita vero maxime molestias, hic aspernatur, voluptates quos sunt neque assumenda officiis obcaecati. Atque autem, nesciunt odit recusandae sapiente nostrum quaerat quod pariatur dolorum voluptas ex eius neque voluptate voluptatum, itaque non omnis eveniet in, voluptatibus amet magnam accusantium corporis. Architecto odit odio ratione deleniti quam tempora fugit hic amet nihil quaerat? Doloribus aut repudiandae consectetur ex unde, cumque voluptas vero accusantium enim! Accusantium harum deleniti recusandae minus ipsa quasi sed? Nisi deleniti ipsa sit aliquid rem dolores odit fugit impedit vero. Magni quam alias molestiae officia pariatur facilis.
              </p>
              <p className="mt-4 font-semibold text-gray-900 mb-20">Sewmini</p>

            </div>
          </article>
          
          
        </div>
      </div>
     
    </main>





    
    





    
</div>




    </>
    )
}


function CheckIcon1(props) {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
        <path
          d="M7 13l3 3 7-7"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }


export default jobsearch

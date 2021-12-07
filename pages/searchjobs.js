import { Fragment, useState } from 'react'
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


    const plans = [
        {
          name: 'Backend Developer',
          ram: 'Full-time',
          cpus: 'On-site',
          disk: ' Rs 120,000.00 per month',
        },
        {
          name: 'Backend-Developer',
          ram: 'Part-time',
          cpus: 'Remote',
          disk: '512 GB SSD disk',
        },
        {
          name: 'Enterprise',
          ram: '32GB',
          cpus: '12 CPUs',
          disk: '1024 GB SSD disk',
        },
      
        {
          name: 'Enterprise',
          ram: '32GB',
          cpus: '12 CPUs',
          disk: '1024 GB SSD disk',
        },
        {
          name: 'Enterprise',
          ram: '32GB',
          cpus: '12 CPUs',
          disk: '1024 GB SSD disk',
        },
        {
          name: 'Enterprise',
          ram: '32GB',
          cpus: '12 CPUs',
          disk: '1024 GB SSD disk',
        },
        {
          name: 'Enterprise',
          ram: '32GB',
          cpus: '12 CPUs',
          disk: '1024 GB SSD disk',
        },
        {
          name: 'Enterprise',
          ram: '32GB',
          cpus: '12 CPUs',
          disk: '1024 GB SSD disk',
        },
        {
          name: 'Enterprise',
          ram: '32GB',
          cpus: '12 CPUs',
          disk: '1024 GB SSD disk',
        },
      
        {
          name: 'Enterprise',
          ram: '32GB',
          cpus: '12 CPUs',
          disk: '1024 GB SSD disk',
        },
        {
          name: 'Enterprise',
          ram: '32GB',
          cpus: '12 CPUs',
          disk: '1024 GB SSD disk',
        },
        {
          name: 'Enterprise',
          ram: '32GB',
          cpus: '12 CPUs',
          disk: '1024 GB SSD disk',
        },
        
       
      
      ]

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const jobsearch = () => {

    const [selected, setSelected] = useState(plans[0])

    return (

        <>
        


     <Header/>










    {/** Body */}
    <div className="flex flex-col items-center ">


    <div className="flex justify-center mt-6 mb-0">
        <form className="flex flex-col gap-3 md:flex-row w-full md:w-full max-w-full md:space-x-3 space-y-3 md:space-y-0 justify-center">
            <div className="flex flex-col md:flex-row gap-6 relative  ">
                <input type="text" id="&quot;form-subscribe-Subscribe" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-700 w-full lg:w-96 py-2.5 px-4 bg-white text-gray-700 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Job title"/>
                <input type="text" id="&quot;form-subscribe-Subscribe" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-700 w-full lg:w-96 py-2.5 px-4 bg-white text-gray-700 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Location"/>
            </div>
                <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                    Find Jobs
                </button>
        </form>
      
    </div>  







<div className="w-full lg:w-1/5 h-20 flex justify-center items-center gap-0" style={{ position: "relative", zIndex: "100"}}>






                <div className="w-32 text-right">
                <Menu as="div" className="relative inline-block text-left ">
                <div>
                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-50 text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
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
                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-50 text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
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
                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-50 text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
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








    
    <div className="w-full h-3/4 px-4 py-2 flex bg-red-50" style={{ height: "76vh"}}>
      


      { /*  pagination */}

      <div className=" bg-red-50 w-1/2 px-4 py-3 flex flex-col items-center justify-between border-t border-gray-200 sm:px-6">
      

      {/* selector*/}
      <div className="w-full  mx-auto overflow-y-auto pb-10  p-2 bg-red-50 ">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2 grid grid-cols-2 gap-4 ">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-offset-2 ring-offset-gray-800 ring-white ring-opacity-60'
                      : ''
                  }
                  ${
                    checked ? 'bg-indigo-700 bg-opacity-75 text-white' : 'bg-white'
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none border-2 border-gray-400`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full ">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                            <span>
                              {plan.ram}/{plan.cpus}
                            </span>{' '}
                            <span aria-hidden="true">&middot;</span>{' '}
                            <span>{plan.disk}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-white">
                          <CheckIcon1 className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>


      {/* pagination div*/}
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 gap-3 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            <a
              href="#"
              aria-current="page"
              className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              1
            </a>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              2
            </a>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
            >
              8
            </a>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              9
            </a>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>




      









        
          <div className="hidden lg:block lg:flex lg:flex-col lg:items-start lg:justify-between  w-1/2 p-8 border-t border-gray-200">
            <div className="flex">
          <div className="flex-1 min-w-0 ">
            <h3 className="text-2xl lg:text-xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Back End Developer</h3>
            <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-2">
              <div className="mt-2 flex items-center text-xs text-gray-800 font-bold bg-pink-300 rounded-lg p-2 px-3">
                <BriefcaseIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-800" aria-hidden="true" />
                Full-time
              </div>
              <div className="mt-2 flex items-center text-xs text-gray-800 font-bold bg-yellow-300 rounded-lg p-2 px-3">
                <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-800" aria-hidden="true" />
                Remote
              </div>
              <div className="mt-2 flex items-center text-xs text-gray-800 bg-green-300 rounded-lg p-2 px-3 font-bold">
                <CurrencyDollarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-800" aria-hidden="true" />
                $120k &ndash; $140k
              </div>
              <div className="mt-2 flex items-center text-xs text-gray-800 bg-red-300 rounded-lg p-2 px-2 font-bold">
                <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-800" aria-hidden="true" />
                Closing on January 9, 2020
              </div>
            </div>
          </div>
          <div className="mt-5 flex lg:mt-0 lg:ml-4 lg:h-10 ">
            

            <span className="hidden sm:block ml-3">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <LinkIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                Company profile
              </button>
            </span>

            <span className="sm:ml-3">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Apply 
              </button>
            </span>

            {/* Dropdown */}
            <Menu as="span" className="ml-3 relative sm:hidden">
              <Menu.Button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                More
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        Edit
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        View Company Profile
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          </div>
          <div className="w-full flex justify-center" style={{ overflowY: "scroll", height: "550px"}}>

            <div className="w-full px-6"> 
            Full Job Description
Location
100% Remote
Type
Full-time
Exodus's mission is to help half the world exit the traditional financial system by 2030. We need a strong React Engineer to help us unlock many future products.

Frameworks and Languages

JavaScript
React
Redux
Node
Electron (bonus)
What You Will Do

Work with design and other teams to develop new customer-facing features and maintain existing ones.
Create libraries, components and tools to ensure maximum performance with a top-notch user experience.
Improve development experience to delight your teammates.
Think like a product owner: what will delight users? What are the acceptable risks?
Help colleagues review and test code
Who You Are

You have at least 3 years of experience building desktop or web apps with React, have strong CSS skills and can create custom and complex UI and implement pixel-perfect designs.
You have excellent knowledge of the techniques used to optimize performance and can squeeze every last millisecond out of the code.
You’re self-motivated, well organized, and an excellent communicator - both written and verbal.
You have mad debugging skills. Remember that time you tinkered something into submission? We'd love to hear about it.
You are team-oriented and derive fulfillment from helping others succeed.
You have experience collaborating with others with a pull-request-based workflow.
Experience with JavaScript testing best practices and can document your work very well.
Nice to Have

You have a passion for cryptocurrencies like Bitcoin.
Understanding of cryptographic primitives like hashing, macs, PK-crypto, and signing.
About Exodus

Exodus is a multi-asset cryptocurrency wallet with a built-in exchange feature. We started our movement in 2015 and have been a distributed team since then. Our mission is to help half of the world exit the traditional financial system and move into the crypto financial system by the year 2030. To do that we want to make sure we hire the best of the best: people who are intrinsically motivated by what we are trying to achieve and who love what they do professionally.

What we Offer

Freedom to work wherever you want, whenever you want.
Building the future. Cryptocurrencies lay the foundation to the internet of value, the next major wave in application technology and personal finance.
Collaborative and feedback-driven culture.
Opportunity to grow.
Fair pay, no matter where you live along with a competitive benefits package.
100% pay in Bitcoin with a buffer to account for price changes and exchange fees.
Benefits:

Health: Most of our health insurance plans are covered 100% for you and covered 50% for your dependents. We’ll also cover dental insurance. If you are outside of the United States, we will reimburse you up to $500 per month for any medical and dental insurance for you and your dependents.

PTO: 30 days of paid time off per year on top of a flexible schedule where you can work wherever and whenever. If you’re part-time with us, you’ll still receive 15 days of paid time off.

Unlimited Bereavement: We will pay you your full salary for the first two weeks for the loss of any immediate family members but we allow you to take all the time you need to grieve outside of that.

Parental Leave: 12 weeks of fully paid leave with and a month of flexible work for the primary caregiver.

Tax help: Getting paid in Bitcoin new to you? Don’t worry! We will reimburse you for speaking with a professional tax specialist in your state/country to make sure everything is taken care of.

Perks: Exodus offers a variety of seasonal perks including free subscriptions to services like Calm and Masterclass, coverage for gym memberships and therapy. We want to make sure all of our employees know they are our priority and we give back for your hard work often.

Our Hiring Process

Our hiring process consists of several different stages:

Recruiter Interview: If we like your initial application, expect to schedule an interview with a member of our recruitment team. This interview will focus on getting to know you a bit more and will focus on explaining the culture of the company. We want to know more about why you want to join our team, how you feel about our mission and cryptocurrency now and how it fits into your overall career plan to make sure this is the right place for you.

Assessments: Not every role consists of an assessment but if yours does it will be directly related to the job you apply for.

Interview with your future manager: This is to make sure that you are a fit for the team you are applying to and that the hard and soft skills you possess are a good fit for us at the time.

Interview(s) with your future colleagues: We call these focus interviews and they are a time for you to learn more about your role from someone you will closely collaborate with. It’s a time to dig into the culture of the team and the day to day for someone in that role.

Career History Interview: For our management roles, we take some more time before the end of the process to better get to know you and your past performance better. Expect this call if you will be leading a team.

Exodus
Today
            </div>
 
          </div>
        </div>
    </div>





    
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

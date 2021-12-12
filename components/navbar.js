import { Fragment, useEffect, useState, useContext} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { UserContext} from '../lib/context'
import Link from 'next/link'
// import NotificationPopover from './notification_popover'
import { useRouter } from 'next/router'


const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Search', href: '/contact', current: false },
  { name: 'About Us', href: '/about', current: false },
  { name: 'Contact Us', href: '/', current: false}
 
]






function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



const navbar2 = () => {


  const [ loggedIn, setLoggedIn] = useState(false)
  const [ userInfoStorage, setUserInfoFromLocalStorage] = useState()
  const [parsedUserInfo, setParsedUserInfo] = useState()

  const router = useRouter()


  const {userData} = useContext(UserContext)

 const adminNavigation = [
  { name: 'Your Profile', href: '#', function: ()=>{ return router.push('/admin')}},
  { name: 'Sets', href: '#', function: ()=>{} },
  { name: 'Sign out', href: '#', function : function() {
    return setUserInfoFromLocalStorage(localStorage.removeItem("userInfo"))}},
  

]

const companyNavigation = [
  { name: 'Your Profile', href: '#', function: ()=>{return router.push('/organization/company_dashboard')}},
  { name: 'Settings', href: '#', function: '#' },
  { name: 'Sign out', href: '#', function: '' },
  

]

const employeeNavigation = [
  { name: 'Your Profile', href: '#', function: '#'},
  { name: 'Settings', href: '#', function: '#' },
  { name: 'Sign ', href: '#', function: '' },
  
]

  useEffect(()=>{


    

    // setUserInfoFromLocalStorage(localStorage.getItem("userInfo"))

    

    //  if(userInfoStorage){
    // const userInfo = JSON.parse(userInfoStorage)

    // setParsedUserInfo(userInfo)
    //   if(userInfo){
    //     setLoggedIn(true)
    //   }
    
    //  }else{
    //    setLoggedIn(false)
    //  }

   

  }, [])


    return (
        <Disclosure as="nav" className="bg-gray-800 " style={{position: 'relative', zIndex: 100}} >
          {({ open }) => (
            <>
              <div className=" mx-auto px-0 sm:px-0   lg:w-3/4 ">
                <div className="flex items-center justify-between h-20 ">
                  <div className="flex items-center ">
                    <div className="flex-shrink-0">
                    <div className="flex">
                    <a href="#">
                      
                      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 16 24" style={{fill: "rgba(0, 0, 0, 1)", filter: " invert(75%) sepia(30%) saturate(7412%) hue-rotate(318deg) brightness(109%) contrast(94%)"}}><path d="m17.549 5.557-.403 2.113c-.049.229-.337.47-.605.47h-3.76c-.425 0-.729.296-.729.714v.463c0 .43.307.725.73.725h3.194c.298 0 .591.33.524.646l-.404 2.083c-.037.181-.237.475-.592.475h-2.609c-.477 0-.617.069-.936.454-.316.395-3.175 3.827-3.175 3.827-.026.033-.054.022-.054-.011V5.522c0-.271.234-.588.586-.588h7.756c.283 0 .549.269.477.618v.005zm.341 8.288c.111-.437 1.319-6.63 1.722-8.593m-1.489-2.311H8.457c-1.33 0-1.723 1.002-1.723 1.635v15.353c0 .71.381.975.596 1.062.214.087.807.161 1.163-.247 0 0 4.563-5.296 4.64-5.373.125-.118.125-.118.238-.118h2.954c1.245 0 1.438-.885 1.574-1.405.114-.429 1.325-6.622 1.721-8.595.307-1.496-.079-2.311-1.495-2.311h-.002z"></path></svg>
                    </a>
                    <h1 className="flex font-bold justify-start items-center lg:w-0 lg:flex-1 text-xl text-red-400">utureSeekers.lk</h1>
                    </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-64 flex items-baseline space-x-4">

                        <Link href="/">
                          <a
                            key={navigation[0].name}
                            href={navigation[0].href}
                            className={classNames(
                              navigation[0].current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-black'
                            )}
                            aria-current={navigation[0].current ? 'page' : undefined}
                          >
                            {navigation[0].name}
                          </a>
                          </Link>
                          <Link href="/searchjobs2">
                          <a
                            key={navigation[1].name}
                            href={navigation[1].href}
                            className={classNames(
                              navigation[2].current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-black'
                            )}
                            aria-current={navigation[2].current ? 'page' : undefined}
                          >
                            {navigation[1].name}
                          </a>
                          </Link>
                          <Link href="/contact">
                          <a
                            key={navigation[1].name}
                            href={navigation[1].href}
                            className={classNames(
                              navigation[1].current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-black'
                            )}
                            aria-current={navigation[0].current ? 'page' : undefined}
                          >
                            {navigation[3].name}
                          </a>
                          </Link>
                          <Link href="/about">
                          <a
                            key={navigation[2].name}
                            href={navigation[2].href}
                            className={classNames(
                              navigation[2].current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-black'
                            )}
                            aria-current={navigation[2].current ? 'page' : undefined}
                          >
                            {navigation[2].name}
                          </a>
                          </Link>
                      </div>
                    </div>
                  </div>
                  {
                    loggedIn ? (

                            <div className="hidden md:block">
                          <div className="ml-4 flex items-center md:ml-6">
                            
                            {/* <NotificationPopover/> */}

                            

                            {/* Profile dropdown */}
                            <Menu as="div" className="ml-3 relative">
                              <div>
                                <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                  <span className="sr-only">Open user menu</span>
                                  <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
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
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                { parsedUserInfo.userType ==='admin' ? (adminNavigation.map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                              
                            >
                              <button onClick={item.function}>
                              {item.name}
                              </button>
                              
                            </Disclosure.Button>
                          ))):
                          
                          (userInfoStorage.userType === 'company' ? (companyNavigation.map(
                            (item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                
                              >
                                {item.name}
                              </Disclosure.Button>
                            )
                          )):

                          (employeeNavigation.map(
                            (item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                
                              >
                                {item.name}
                              </Disclosure.Button>
                            )
                          ))
                          
                          )}
                                </Menu.Items>
                              </Transition>
                            </Menu>
                          </div>
                        </div>
                    ) : (
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                          <Link href="/login">
                          <a href="#" className="whitespace-nowrap text-base font-black text-gray-200 hover:text-green-400">
                          Sign in {}
                          </a>
                          </Link>
                          
                          <Link href={'/components/signup_select'}>
                          <a
                          href="#"
                          className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-black text-white bg-green-400 hover:bg-indigo-400"
                          >
                          Sign up
                          </a>
                          </Link>
                        </div>
                    )
                  }
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                       
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    )
}

export default navbar2

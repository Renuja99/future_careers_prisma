import { useState, useRef } from 'react'
import { RadioGroup } from '@headlessui/react'
import { useRouter} from 'next/router'
import Link from 'next/link'
import toast from 'react-hot-toast'

const role = [
  {
    name: 'ADMIN',
    ram: 'Continue as administrator',
    cpus: '',
    disk: '', 
  },
  {
    name: 'JOB_SEEKER',
    ram: 'Find careers',
    cpus: '',
    disk: '',
  },
  {
    name: 'EMPLOYER',
    ram: 'Post your job &',
    cpus: 'Interview candidates',
    
  },
]


function CheckIcon(props) {
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


export default function login(){

  const [selected, setSelected] = useState(role[0])
  
  //SET REFERENCES TO EMAIL AND PASSWORD
  const emailRef = useRef()
  const passwordRef = useRef()
  const router = useRouter()




  function submitFormHandler(event){

    //PREVENTS  REFRESHING OF PAGE
    event.preventDefault();
    // GETS THE CURRENT VALUE OF THE REFERENCES AND ASSIGNS IT TO THE CORRESPONDING CONSTANTS
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value; 
    const reqBody = { email: enteredEmail, password: enteredPassword , role: selected.name}

    


    console.log(reqBody)

    fetch('/api/userAuth',{
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
      .then((data)=> localStorage.setItem("userInfo", JSON.stringify(data)))
      .then(()=>{
       
        let userInfo = JSON.parse(localStorage.getItem("userInfo"))
      if (userInfo.role === 'ADMIN'){
        router.push('/')
      }
      else if( userInfo.role === 'JOB_SEEKER'){
        router.push(`jobseeker/${userInfo._id}`)
      }
      else if(userInfo.role === 'EMPLOYER'){
        router.push(`/company/${userInfo._id}`)
      }else{
        toast.error("This didn't work.")
      }
    
       })

    

    
  }

    return (
        <div className=" bg-gray-500 ">
            

<section className="w-full px-8 py-16 h-screen bg-gray-200 xl:px-8">
    <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center md:flex-row">

            <div className="w-full  space-y-2 md:w-3/5  md:pr-16">
                <p className="font-medium text-blue-500 uppercase">Building Businesses</p>
                <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                    Want to find a career.
                </h2>
                <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                You're here to hire.
                </h2>
                <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                    We're here to help.
                </h2>
                <p className="text-md text-gray-600 md:pr-16">Post your job, interview candidates, and make offers all on FutureSeekers.lk. Start hiring today.
                </p>
                <span className="text-md text-gray-600 md:pr-16">Find a career you'll love.
                Explore which careers have the highest job satisfaction, best salaries, and more
                </span>
            </div>

            <div className="w-full mt-16 md:mt-0 md:w-2/5">
              <form onSubmit={submitFormHandler}>
                <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                    <h3 className="mb-6 text-2xl font-medium text-center">Sign in to your Account</h3>
                    <input type="text" name="email" className="block w-full px-4 py-3 mb-4 border border-1 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-green-500 focus:outline-none" placeholder="Email address" ref={emailRef} required/>
                    <input type="password" name="password" className="block w-full px-4 py-3 mb-4 border border-1 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-green-500 focus:outline-none" placeholder="Password" ref={passwordRef} required/>
                    
                    {/* select group */}






                    <div className="w-full px-4 py-16">
                      <div className="w-full max-w-md mx-auto">
                        <RadioGroup value={selected} onChange={setSelected}>
                          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                          <div className="space-y-2">
                            {role.map((role) => (
                              <RadioGroup.Option
                                key={role.name}
                                value={role}
                                className={({ active, checked }) =>
                                  `${
                                    active
                                      ? 'ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60'
                                      : ''
                                  }
                                  ${
                                    checked ? 'bg-red-500 bg-opacity-75 text-white border-red-600 border-4' : 'bg-gray-200'
                                  }
                                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                                }
                              >
                                {({ active, checked }) => (
                                  <>
                                    <div className="flex items-center justify-between w-full">
                                      <div className="flex items-center">
                                        <div className="text-sm">
                                          <RadioGroup.Label
                                            as="p"
                                            className={`font-medium  ${
                                              checked ? 'text-white' : 'text-gray-900'
                                            }`}
                                          >
                                            {role.name}
                                          </RadioGroup.Label>
                                          <RadioGroup.Description
                                            as="span"
                                            className={`inline ${
                                              checked ? 'text-sky-100' : 'text-gray-500'
                                            }`}
                                          >
                                            <span>
                                              {role.ram} {role.cpus}
                                            </span>{' '}
                                            <span aria-hidden="true">&middot;</span>{' '}
                                            <span>{role.disk}</span>
                                          </RadioGroup.Description>
                                        </div>
                                      </div>
                                      {checked && (
                                        <div className="flex-shrink-0 text-white">
                                          <CheckIcon className="w-6 h-6" />
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
                    </div>





                    <div className="block">
                        <button className="w-full px-3 py-4 font-medium text-white bg-green-600 rounded-lg">Log Me In</button>
                    </div>
                    <p className="w-full mt-4 text-sm text-center text-gray-500">Don't have an account? <Link href="/components/signup_select" className="text-blue-500 underline">Sign up here</Link></p>
                    
                </div>
                </form>
            </div>
            
        </div>
    </div>
</section>

        </div>
    )
}
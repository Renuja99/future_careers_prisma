import { useState, useEffect } from "react";
import  {useRouter} from 'next/router'



  function getRandomColor() {
    var lum = -0.25;
    var hex = String('#' + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    var rgb = "#",
        c, i;
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ("00" + c).substr(c.length);
    }
    return rgb;
}
  
  export default function Example({parsed}) {

    const [firstLetter, setFirstLetter] = useState('')

    const router = useRouter()


   const handleRedirect = (id)=>{

      router.push(`/company/job_applicants/${id}`)
   } 

   
   useEffect(()=>{


   },[])


    return (
      <div  className="flex flex-col items-center justify-center rounded-lg bg-gray-300">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 py-10">
          <div className="py-2 align-middle inline-block w-2/3 bg-slate-800 rounded-3xl sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-300 sm:rounded-lg ">
              <table className="min-w-full divide-y divide-gray-700 ">
                <thead className="bg-gray-800 ">
                  <tr>
                   
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-black text-gray-100 uppercase tracking-wider"
                    >
                      Job Title
                    </th>
                    
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-black text-gray-100 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-black text-gray-100 uppercase tracking-wider"
                    >
                      Closing date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-black text-gray-100 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-black text-gray-100 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {parsed.map(( parse , index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button>
                        <div className="flex items-center">
                          <div className="flex items-center justify-center flex-shrink-0 h-10 w-10 rounded-full" style={{ backgroundColor: `${getRandomColor()}`}}>
                            
                            <h1 className="text-white text-2xl font-normal">{}</h1>
                            
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{parse.jobSeeker.cv_user}</div>
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {}
                        </span>
                          </div>
                        </div>
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{}</div>
                        <div className="text-sm text-gray-500">{}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a type="button" className="text-indigo-600 hover:text-indigo-900" >
                          View applicants
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  


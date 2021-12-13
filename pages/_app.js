import 'tailwindcss/tailwind.css'
import '../styles.css'
import '../global.css'
import { UserContext } from '../lib/context'
import { useUserData} from '../lib/hooks'
import { Toaster } from 'react-hot-toast'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function MyApp({ Component, pageProps }) {
  

    const userData = useUserData();
  
  return  ( 

        <UserContext.Provider value={userData}>
          <Component {...pageProps} />
          <Toaster />
          
        </UserContext.Provider>
  )
  
}

export default MyApp

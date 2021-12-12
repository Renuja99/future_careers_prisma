import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context'


//Conponents' children only shown to logged-in users
export default function AuthChech(props){
    const { username } = useContext(UserContext);

    return username ?
        props.children:
        props.fallback || <Link href='/login'> You must be signed in </Link>;
}
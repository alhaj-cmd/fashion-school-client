
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../components/Hooks/useAuth';
import useInstract from '../components/Hooks/useInstract';


const InstractorRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isInstractor, isInstractorLoading]  = useInstract();
    const location = useLocation();

    if(loading || isInstractorLoading){
        return <progress className='progress w-56'></progress>
    }

    if(user && isInstractor){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default InstractorRoute;
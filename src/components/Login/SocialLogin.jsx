// import { FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import logo from '../../assets/google.png'
import { AuthContext } from '../../Providers/Authprovider';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const {googleSingIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
  
    const from = location.state?.from?.pathName || "/";

    const handleGoogleSignIn = () =>{

        googleSingIn()
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            navigate(from, { replace: true });
        })
    }


    return (
        <div>
            <a href="#" className="flex items-center justify-center px-4 py-2 space-x-2 bg-red-600 text-white rounded transition hover:bg-red-800">
           <div className='h-6 w-6'>
            <img src={logo} alt="" />
           </div>
                <span onClick={handleGoogleSignIn} className="text-xs font-bold">Sign in with Google</span>
            </a>
        </div>
    );
};

export default SocialLogin;
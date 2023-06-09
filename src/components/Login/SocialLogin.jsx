// import { FaGoogle } from "react-icons/fa";
import logo from '../../assets/google.png'


const SocialLogin = () => {
    return (
        <div>
            <a href="#" className="flex items-center justify-center px-4 py-2 space-x-2 bg-red-600 text-white rounded transition hover:bg-red-800">
           <div className='h-6 w-6'>
            <img src={logo} alt="" />
           </div>
                <span className="text-xs font-bold">Sign in with Google</span>
            </a>
        </div>
    );
};

export default SocialLogin;
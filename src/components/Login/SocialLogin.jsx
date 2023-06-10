// import { FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import logo from '../../assets/google.png'
import { AuthContext } from '../../Providers/Authprovider';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
  
    const from = location.state?.from?.pathName || "/";

    const handleGoogleSignIn = () =>{

        googleSignIn()
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);

            const saveUser = {name:loggedInUser.displayName, email:loggedInUser.email}
            fetch('http://localhost:5000/users',{
                method:'POST',
                headers:{
                  'content-type':'application/json'
                },
                body:JSON.stringify(saveUser)
              })
              .then(res => res.json())
              .then(data =>{
                if(data.insertedId){
                //   reset();
                //   Swal.fire({
                //     position: 'top-end',
                //     icon: 'success',
                //     title: 'User created Successfully',
                //     showConfirmButton: false,
                //     timer: 1500
                //   })
                navigate(from, { replace: true });
                }
              })


           
        })
    }


    return (
        <button onClick={handleGoogleSignIn}>
            <a href="#" className="flex items-center justify-center px-4 py-2 space-x-2 bg-red-600 text-white rounded transition hover:bg-red-800">
           <div className='h-6 w-6'>
            <img src={logo} alt="" />
           </div>
                <span  className="text-xs font-bold">Sign in with Google</span>
            </a>
        </button>
    );
};

export default SocialLogin;
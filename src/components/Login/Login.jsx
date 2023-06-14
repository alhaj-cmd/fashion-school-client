import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    signIn(data.email, data.password)
      .then(result => {
        const userData = result.user;
        console.log(userData);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User Login Successful',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(from, { replace: true });
      })
  }

  console.log(watch("example"));


  return (
    <div className="bg-cover sm:bg-cover h-1/2 bg-no-repeat bg-[url('login.avif')] ">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">

          <h2 className="text-3xl font-bold">LogIn</h2>
          <div className="card  w-full max-w-md shadow-2xl card-body bg-red-400">
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} placeholder="Type your E-mail" className="input input-bordered" />
                <p></p>
                {errors.email && <span>User Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <div className="flex  text-center items-center">
                  <input {...register("password", { required: true })} type={showPassword ? 'text' : 'password'} className="input input-bordered w-full" />
                  <span className="-ml-10 text-red-500">
                    {showPassword ? (
                      <FaEyeSlash
                        className="h-6 w-6 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      />
                    ) : (
                      <FaEye
                        className="h-6 w-6 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      />
                    )}
                  </span>
                </div>

                {errors.password?.type === 'required' && <span>Confirm password is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                  LogIn
                </button>
              </div>

            </form>
            <p className="my-2">Do not have an Accounts? <Link to='/register' className="font-bold text-primary ">Registration !!</Link></p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


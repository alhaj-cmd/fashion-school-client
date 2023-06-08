import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathName || "/";


  // password show click hadle start
  // const [type, setType] = useState('password');
  // const [icon, setIcon] = useState(false);

  // const handleToggle = () =>{
  //   if(type === 'password'){
  //     console.log('data',setType)
  //    return setType(true);
     
  //   }
  //   else{
  //     setType(false)
  //   }
  // }
  // password show click hadle end

  // const handleLogin = event => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   // console.log(email,password);
  //   signIn(email, password)
  //     .then(result => {
  //       const user = result.user;
  //       console.log(user);
  //     })

  // }


  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{ 
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
        navigate(from, {replace:true});
  })}

  console.log(watch("example"));


  return (
    <div className="bg-cover sm:bg-cover h-1/2 bg-no-repeat bg-[url('login.avif')] ">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">

          <h2 className="text-3xl font-bold">LogIn</h2>
          <div className="card  w-full max-w-md shadow-2xl card-body bg-red-400">
            <form onSubmit={handleSubmit(onSubmit)}  className="">
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
               
                <input {...register("password", { required: true, minLength:6, maxLength:15 })} type='password' className="input input-bordered" />
                {errors.password?.type === 'required' && <span>Confirm password is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="mt-4">Do not have an Accounts? <Link to='/register' className="font-bold text-primary ">Registration !!</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
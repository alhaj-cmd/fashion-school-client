import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/Authprovider";
import Swal from "sweetalert2";
import SocialLogin from "../Login/SocialLogin";


const Register = () => {
  const { register, handleSubmit, reset, getValues,  watch,  formState: { errors } } = useForm();
  const password = useRef({});

  password.current = watch("password", "");
  const {createUser, updateUserProfile} = useContext(AuthContext);
const navigate = useNavigate();

  const onSubmit = data =>{ 
    console.log(data)
    createUser(data.email, data.password)
    .then(result=>{
      const loagedUser = result.user;
      console.log(loagedUser);
      updateUserProfile(data.name, data.photoURL)
      .then(() =>{
        
        const saveUser = {name:data.name, email:data.email}
        fetch('https://y-wheat-rho.vercel.app/users',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(saveUser)
        })
        .then(res => res.json())
        .then(data =>{
          if(data.insertedId){
            reset();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'User created Successfully',
              showConfirmButton: false,
              timer: 1500
            })
            navigate('/')
          }
        })

      
      })
      .catch(error => console.log(error))
    })
  };

  console.log(watch("password"));

  return (

    <div className="bg-cover sm:bg-cover h-1/2 bg-no-repeat bg-[url('login.avif')] ">
      <div className=" min-h-screen ">
        <div className="hero-content flex-col">

          <h2 className="text-3xl font-bold">Registration</h2>
          <div className="card w-full max-w-lg shadow-2xl  card-body bg-red-400">
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} placeholder="Type Your Name" className="input input-bordered" />
                {errors.name && <span className="text-primary">Name field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} placeholder="Type your E-mail" className="input input-bordered" />
                {errors.email && <span className="text-primary">User Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input {...register("password", { required: true, minLength:6, maxLength:15 })} type='password' className="input input-bordered" />
                {errors.password?.type === 'required' && <span className="text-primary">Password is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input {...register("password-repeat", { required: true, minLength:6, maxLength:15 })} type='password' className="input input-bordered" />
                {watch("password_repeat") !== watch("password") &&
      getValues("password_repeat") ? (
        <p>password not match</p>
      ) : null}
                {errors.password?.type === 'required' && <span className="text-primary">Confirm password is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URl</span>
                </label>
                <input type="photoURL" placeholder="photo url" {...register("photoURL", { required: true })} className="input input-bordered" />
                {errors.photoURL && <span className="text-primary">Photo URL is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
              
              <select className="p-2 rounded" {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>

              </div>
             
              <div className="form-control mt-6">
                <button className="btn bg-red-500 hover:bg-red-600 border-none">Register</button>
              </div>
            </form>
            <p className="mt-4 text-center">Already have an Accounts? <Link to='/login' className="font-bold text-primary ">LogIn !!</Link></p>
          <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Register;
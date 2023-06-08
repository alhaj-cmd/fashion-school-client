import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/Authprovider";
import Swal from "sweetalert2";


const Register = () => {
  const { register, handleSubmit, reset,  formState: { errors } } = useForm();
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
        console.log('user photo')
        reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User created Successfully',
          showConfirmButton: false,
          timer: 1500
        })
        navigate('/')
      })
      .catch(error => console.log(error))
    })
  };


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
                {errors.name && <span>Name field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} placeholder="Type your E-mail" className="input input-bordered" />
                {errors.email && <span>User Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input {...register("password", { required: true, minLength:6, maxLength:15 })} type='password' className="input input-bordered" />
                {errors.password?.type === 'required' && <span>Password is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input {...register("password", { required: true, minLength:6, maxLength:15 })} type='password' className="input input-bordered" />
                {errors.password?.type === 'required' && <span>Confirm password is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URl</span>
                </label>
                <input type="photoURL" placeholder="photo url" {...register("photoURL", { required: true })} className="input input-bordered" />
                {errors.photoURL && <span>Photo URL is required</span>}

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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="mt-4 text-center">Already have an Accounts? <Link to='/login' className="font-bold text-primary ">LogIn !!</Link></p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Register;
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import { Link } from "react-router-dom";

const Login = () => {
   
    const {signIn} = useContext(AuthContext);


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })

    }



    return (
        <div className="bg-cover sm:bg-cover h-1/2 bg-no-repeat bg-[url('login.avif')] ">
          <div className="hero min-h-screen ">
  <div className="hero-content flex-col ">
   
            <h2 className="text-3xl font-bold">LogIn</h2>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-red-400">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span  className="label-text">Password</span>
          </label>
          <input name='password' type='password' className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p>Do not have an Accounts? <Link to='/register' className="text-blue-500">Registration !!</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;
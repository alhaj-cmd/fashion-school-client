import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/Authprovider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-lg  bg-[#ede9e0] ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Home</Link></li>
                            <li><Link>Instructors</Link></li>
                            <li><Link>Classes</Link></li>
                           {
                            user && <li><Link>DashBoard</Link></li>
                           }

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><span className="text-red-500 text-2xl">Fashion</span>School</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link>Home</Link></li>
                        <li><Link>Instructors</Link></li>
                        <li><Link>Classes</Link></li>
                        {
                            user && <li><Link>DashBoard</Link></li>
                           }


                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <li>   <p>{user.displayName}</p></li> */}
                    {
                        user ? <>

                            <label tabIndex={0} className="btn btn-ghost mr-2 btn-circle avatar">
                                <div className="w-10  text-primary rounded-full ">

                                    <img src={user?.photoURL} alt="no photo" />
                                </div>
                            </label>
                            <button onClick={handleLogOut} className="btn  btn-error"><Link to='/'>LogOut</Link></button></> : <>

                            <button className="btn  btn-error"><Link to='/login'>LogIn</Link></button>
                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;
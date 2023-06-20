import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/Authprovider";
import { useState } from "react";
import { useEffect } from "react";
import useInstract from "../Hooks/useInstract";
import useAdmin from "../Hooks/useAdmin";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstractor] = useInstract();
    console.log(user);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme])
    const handleToggle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-lg bg-[#ede9e0] dark:bg-black  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 font-bold rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/instrators'>Instructors</Link></li>
                            <li><Link>Classes</Link></li>

                            {
                                isAdmin && <li><Link to='/dashboard/manageuser'>DashBoard</Link></li>
                            }
                            {
                                isInstractor && <li><Link to='/dashboard/addAclass'>DashBoard</Link></li>
                            }
                            {
                                !isAdmin && !isInstractor && <li><Link to='/dashboard/selectedclass'>DashBoard</Link></li>
                            }

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><span className="text-red-500 text-2xl">Fashion</span>School</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-bold px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/instrators'>Instructors</Link></li>
                        <li><Link to='/classitem'>Classes</Link></li>

                        {
                            isAdmin && <li><Link to='/dashboard/manageuser'>DashBoard</Link></li>
                        }
                        {
                            isInstractor && <li><Link to='/dashboard/addAclass'>DashBoard</Link></li>
                        }
                        {
                            !isAdmin && !isInstractor && <li><Link to='/dashboard/selectedclass'>DashBoard</Link></li>
                        }
                        <label className="swap swap-rotate">

                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" onClick={handleToggle} />

                            {/* sun icon */}
                            <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>

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
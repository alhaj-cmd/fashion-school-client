import { FaClipboard, FaHome, FaMale, FaTable, FaWallet, FaAd, FaCalendarDay } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
  // const isAdmin = false;
  // const isInstractor = false;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center  bg-red-200">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-error drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-red-200 text-base-content">
          {/* student */}
          {/* {isAdmin && (
            // admin
            <>
              <li className="ml-4 p-2"><NavLink className="bg-red-400 " to="/">  <FaClipboard /> Manage class</NavLink></li>
              <li className="ml-4 p-2"><NavLink className="bg-red-400 " to="/"><FaMale /> Manage users</NavLink></li></>
          )}
          {isInstractor && (

            <><li className="ml-4 p-2"><NavLink className="bg-red-400 " to="/"><FaCalendarDay /> Add a class</NavLink></li>
              <li className="ml-4 p-2"><NavLink className="bg-red-400 " to="/"><FaAd />My class</NavLink></li></>
          )}
          {!isAdmin && !isInstractor && <>
            <li className="ml-4 p-2"><NavLink className="bg-red-400 " to=""><FaTable /> My selected Class</NavLink></li>
            <li className="ml-4 p-2"><NavLink className="bg-red-400 " to=""> <FaHome />My Enrolled Class</NavLink></li>
            <li className="ml-4 p-2"><NavLink className="bg-red-400 " to="/dashboard/mycart"><FaWallet />Payment</NavLink></li>

          </>} */}

          {/* admin */}
          <li className="ml-4 p-2"><NavLink className="bg-red-400 " to="/">  <FaHome /> Home</NavLink></li>
          <li className="ml-4 p-2"><NavLink className="bg-red-400 " to="/dashboard/manageclass">  <FaClipboard /> Manage class</NavLink></li>
          <li className="ml-4 p-2"><NavLink className="bg-red-400 " to="/dashboard/manageuser"><FaMale /> Manage users</NavLink></li>
          {/* instractor */}
          <li className="ml-4 p-2"><NavLink className="bg-red-400 " to="/"><FaHome /> Home</NavLink></li>
          <li className="ml-4 p-2"><NavLink className="bg-red-400 " to="/dashboard/addAclass"><FaCalendarDay /> Add a class</NavLink></li>
          <li className="ml-4 p-2"><NavLink className="bg-red-400 " to="/dashboard/myclass"><FaAd />My class</NavLink></li>

          {/* student */}
          <li className="ml-4 p-2"><NavLink className="bg-red-400 " to="/"><FaHome /> Home</NavLink></li>
          <li className="ml-4 p-2"><NavLink className="bg-red-400 " to="/dashboard/selectedclass"><FaTable /> My selected Class</NavLink></li>
          <li className="ml-4 p-2"><NavLink className="bg-red-400 " to="/dashboard/enrollclass"> <FaHome />My Enrolled Class</NavLink></li>
          <li className="ml-4 p-2"><NavLink className="bg-red-400 " to="/dashboard/payment"><FaWallet />Payment</NavLink></li>



        </ul>

      </div>
    </div>
  );
};

export default Dashboard;
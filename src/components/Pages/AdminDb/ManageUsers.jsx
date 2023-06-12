import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import {  FaTrash, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";


const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleMakeAdmin = (user) => {
        // console.log(id);
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:'PATCH'
        })
        .then(res => res.json() )
        .then(data => {
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position:'top-end',
                    icon:'success',
                    title:`${user.name} is an Admin Now!`,
                    showConfirmButton:false,
                    timer:1500
                })
            }
        })

    }
    const handleMakeInstrator = (user) => {
        fetch(`http://localhost:5000/users/instractor/${user._id}`,{
            method:'PATCH'
        })
        .then(res => res.json() )
        .then(data => {
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position:'top-end',
                    icon:'success',
                    title:`${user.name} is an  Instrator Now!`,
                    showConfirmButton:false,
                    timer:1500
                })
            }
        })

    }
    const handleDelete = (user) => {
        console.log(user);

    }

    return (
        <div>
            <Helmet>
                <title>Fashion school | All Users</title>
            </Helmet>
            <h2 className="text-3xl">Manage Users : {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="bg-red-300 text-2xl">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>

                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    {/* <td className="bg-red-500">{user.role === 'admin' ? ('admin' &&
                                        <button onClick={() => handleMakeAdmin(user)}><FaMarkdown/></button>
                                    ) : user.role === 'instractor' ? (
                                        ('instractor' &&
                                            <button onClick={() => handleMakeInstrator(user)}><FaMarkdown/></button>)
                                    ) : <button onClick={() => handleMakeInstrator(user)}><FaMarkdown/></button>
                                    }
                                    </td> */}
                                    <td className="text-red-500">{user.role === 'admin' ? 'admin' :
                                        <button onClick={() => handleMakeAdmin(user)}><FaUserShield/></button>}
                                    </td>
                                    <td className="text-red-500">{user.role === 'instractor' ? 'instractor' :
                                        <button onClick={() => handleMakeInstrator(user)}><FaUserShield/></button>}
                                    </td>
                                    <td className="text-red-500"><button onClick={() => handleDelete(user)}><FaTrash></FaTrash></button></td>
                                </tr>

                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
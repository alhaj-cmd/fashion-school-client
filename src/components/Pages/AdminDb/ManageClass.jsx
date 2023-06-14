import { Helmet } from "react-helmet";
import useClass from "../../Hooks/useClass";
import Swal from "sweetalert2";


const ManageClass = () => {
    const [myclass] = useClass();
    // console.log(myclass);

    const handlePending = (myclass) =>{
        console.log(myclass);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to Instractor Class Add this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Instractor class Added!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your Instractor class has been deleted.',
                'success'
              )
            }
          })
    }

    return (
        <div className="">
            <Helmet>
                <title>Fashion School | ManageClass</title>
            </Helmet>
            <h2 className="text-2xl text-center text-purple-500">Manage Class</h2>
            <div className="overflow-x-auto">
                <table className="table ">

                    {/* head */}
                    <thead>
                        <tr className="text-2xl font-bold">
                            <th> * </th>
                            <th>Image</th>
                            <th>E-mail</th>
                            <th>Name</th>
                            <th>Available seats</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myclass.map((instractor, index) =>
                                // console.log(instractor)
                                <tr key={instractor._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-20 h-20">
                                                    <img src={instractor?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {instractor?.email}
                                    </td>
                                    <td><span className="text-2xl font-semibold">{instractor?.name}</span>
                                        <br />
                                        <span>{instractor?.instractor}</span>
                                    </td>
                                    <td className="text-end">
                                        {instractor?.seats}
                                    </td>
                                    <td>
                                        <button onClick={() => handlePending(myclass)} className="btn btn-error  btn-sm">{instractor?.status}</button>

                                    </td>
                                    <td>

                                        <button className="btn btn-outline btn-sm"><div className="badge badge-secondary">Deny</div></button>

                                    </td>
                                    <td>

                                        <button className="btn  btn-primary btn-sm" onClick={() => window.my_modal_3.showModal()}>Feedback</button>

                                    </td>

                                </tr>
                            )
                        }
                        {/* You can open the modal using ID.showModal() method */}

                        <dialog id="my_modal_3" className="modal">
                            <form method="dialog" className="modal-box">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                <h3 className="font-bold text-lg">Congratulations!! !</h3>
                                <p className="py-4">Your feedback helps us improve the services we provide.</p>
                            </form>
                        </dialog>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageClass;
import useAdd from "../../Hooks/useAdd";




const MyClass = () => {

    const [manage] = useAdd();
    console.log(manage, 'data is not found');

    return (
        <div className="overflow-x-auto py-16 mx-10 w-full">
            <table className="table ">


                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Instructor name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        manage.map((instructor, index) =>
                            <tr key={instructor._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={instructor.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className='text-md font-semibold'>
                                    {instructor.name}
                                </td>
                                <td>{instructor.instractor}</td>
                                <td>{instructor.email}</td>
                                <td>{instructor.seats}</td>
                                <td>{instructor.price}</td>
                                <th>
                                    <button className="btn btn-error btn-outline btn-xs">Feedback</button>
                                </th>
                                <th>
                                    <button className="btn btn-success btn-outline btn-xs">update</button>
                                </th>
                            </tr>

                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyClass;
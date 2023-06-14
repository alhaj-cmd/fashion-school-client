import useClass from "../../Hooks/useClass";


const EnrolClass = () => {
    const [myclass] =useClass();
    return (
        <div>
           
           <div className="overflow-x-auto">

<table className="table">
    {/* head */}
    <thead>
        <tr className="text-[16px] font-bold bg-red-300">
            <th> # </th>
            <th>Image</th>
            <th>Name</th>
            <th>Instructor</th>
            <th>E-mail</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        {
            myclass.map((item, index) =>
                // console.log(instractor)
                <tr key={item._id}>
                    <td>
                        {index + 1}
                    </td>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-20 h-20">
                                    <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </div>
                    </td>
                    <td><span className="text-1xl font-semibold">{item?.name}</span>

                    </td>
                    <td>{item?.instractor}</td>
                    <td>
                        {item?.email}
                    </td>
                    <td className="text-end">
                        {item?.price}
                    </td>
                    
                </tr>
            )
        }

    </tbody>

</table>
</div>
        </div>
    );
};

export default EnrolClass;
import { Helmet } from "react-helmet";
import useAddCard from "../../Hooks/useAddCard";
import { Link } from "react-router-dom";


const SelectedClass = () => {
    const [cart] = useAddCard();
    return (
        <div>
            <Helmet>
                <title>Fashion School | My Selected Class</title>
            </Helmet>
            <div className="uppercase font-semibold h-[60px] flex justify-between items-center mt-10 md:mr-6">
                <h3 className="text-2xl">Total Add Card: {cart.length}</h3>

                <Link to='/dashboard/payment'>  <button className="btn btn-error" >Pay</button></Link>

            </div>

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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) =>
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
                                    <td>{item?.Instractor}</td>
                                    <td>
                                        {item?.email}
                                    </td>
                                    <td>
                                        {item?.price}
                                    </td>
                                    <th>
                                        <button className="btn btn-error">Delete</button>
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default SelectedClass;
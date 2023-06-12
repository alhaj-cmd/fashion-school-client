import { Helmet } from "react-helmet";
import useInstractor from "../Hooks/useInstractor";


const Instractors = () => {
    const [instractorItem] = useInstractor();
   
    return (
        <div className="">
             <Helmet>
                <title>Fashion School | Instractors</title>
            </Helmet>
          <div className="overflow-x-auto">
  <table className="table my-32">
    
    {/* head */}
    <thead>
      <tr className="text-2xl font-bold">
        <th> * </th>
        <th>Image</th>
        <th>E-mail</th>
        <th>Name</th>
        <th>Student</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
        {
            instractorItem.map((instractor, index )=>  
            // console.log(instractor)
                <tr key={instractor._id}>
                <td>
                  {index+1}
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
                <span>{instractor?.instructor_name}</span>
                </td>
                <td>
                  {instractor?.student}
                </td>
                <th>
                  <button className="btn btn-error btn-md">details</button>
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

export default Instractors;
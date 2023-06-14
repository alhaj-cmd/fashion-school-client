
import { useContext } from 'react';
import useHook from '../Hooks/useHook';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Providers/Authprovider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAddCard from '../Hooks/useAddCard';

const ClassesItem = () => {
    const [classesItem] = useHook();
    const {user} = useContext(AuthContext);
    const [, refetch] = useAddCard();
    const navigate = useNavigate();
    const location = useLocation();


    const handleAddToCart= (item)=>{
      console.log(item)
      if(user && user.email){
        const orderItem ={name:item.name, classId:item._id, Instractor:item.instructor_name, image:item.image, price:item.price, email:user.email}
        fetch('https://y-wheat-rho.vercel.app/addCard',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(orderItem)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.insertedId){
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Oder Item Added',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
      else{
        Swal.fire({
          title: 'Please login to course?',
         
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Login it!'
        }).then((result) => {
          if (result.isConfirmed) {
           
              navigate('/login', {state:{from:location}})
          }
        })
      }
    }
   
    return (
        <div className="">
             <Helmet>
                <title>Fashion School | Classes</title>
            </Helmet>
          <div className="overflow-x-auto">
  <table className="table my-32">
    
    {/* head */}
    <thead>
      <tr className="text-2xl font-bold">
        <th> # </th>
        <th>Image</th>
        <th>Name</th>
        <th>Instructor name</th>
        <th>Seats</th>
        <th>Price</th>
        <th>Select</th>
      </tr>
    </thead>
    <tbody>
        {
            classesItem.map((item, index )=>  
            // console.log(instractor)
                <tr key={item._id}>
                <td>
                  {index+1}
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
                <td><span className="text-2xl font-semibold">{item?.name}</span>
          
                </td>
                <td>{item?.instructor_name}</td>
                <td>
                  {item?.available_seats}
                </td>
                <td>
                  {item?.price}
                </td>
                <th>
                  <button onClick={() => handleAddToCart(item) } className="btn btn-error btn-md">AddTo</button>
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

export default ClassesItem;
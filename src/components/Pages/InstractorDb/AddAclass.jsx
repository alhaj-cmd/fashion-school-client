

import { useForm } from "react-hook-form";
import useAxios from "../../Hooks/useAxios";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const img_hosting_token = import.meta.env.VITE_Image_upload_token;
// console.log(img_hosting_token);

const AddAclass = () => {
    const [axiosSecure] = useAxios();
    const {user} = useAuth(); 
    const { register, handleSubmit, reset } = useForm();

   
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRespose => {
                console.log(imgRespose);
                if (imgRespose.success) {
                    const imgURL = imgRespose.data.display_url;
                    console.log(data,imgURL)
                    const { name, price, seats, instractor, Email } = data;
                    const newItem = { name, price: parseFloat(price), seats, instractor, email:Email, image: imgURL, status:'pending'  }
                    console.log(newItem);
                    axiosSecure.post('/instractor', newItem)
                        .then(data => {
                            console.log('after posting new add a class', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Your calss has been saved',
                                    showConfirmButton: false,
                                    timer: 1500
                                  })
                            }
                        })
                }
            })


    }

    return (
        <div className="w-full px-10 lg:mt-24 mb-8">
            <SectionTitle subHeading="what's new" heading="Add A Class"></SectionTitle>
            {/*  */}
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>

                    </label>
                    <input type="name" placeholder="Type here" className="input input-bordered w-full "
                        {...register("name", { required: true, maxLength: 120 })} />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Class Image</span>

                    </label>
                    <input type="file" className="file-input file-input-bordered w-full " {...register("image", { required: true })} />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Instructor Name</span>

                    </label>
                   { user && <input type="name" value={user.displayName} placeholder="Type here" className="input  input-bordered w-full " {...register("instractor", { required: true })} />}

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Instructor Email</span>

                    </label>
                    <input type="email" value={user.email} placeholder="Type here" className="input input-bordered w-full " {...register("Email", { required: true })} />

                </div>
               <div className="flex gap-4">
               <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Available Seats </span>

                    </label>
                    <input type="number" placeholder="Type here" className="input input-bordered w-full "
                        {...register("seats", { required: true, maxLength: 120 })} />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Price</span>

                    </label>
                    <input type="number" placeholder="Type here" className="input input-bordered w-full "
                        {...register("price", { required: true, maxLength: 120 })} />

                </div>
               </div>

               
               
                
                <input type="submit" className="  w-full mt-4 btn btn-primary btn-sm"  value="Add Class" />
            </form>


        </div>
    );
};

export default AddAclass;
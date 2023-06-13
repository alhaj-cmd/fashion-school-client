
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";


const useAddCard = () => {
    const {user, loading} = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxios()

    const {refetch, data:cart=[]}=useQuery({
        queryKey:['addCart', user?.email],
        enabled:!loading && !!user?.email,

        queryFn:async()=>{
            // if(!loading && user?.email){

                const res = await axiosSecure(`/addCard?email=${user?.email}`)
                return res.data;
            // }
        },
        // enabled:!loading && !!user?.email
    })
    //addCart
    return [cart, refetch]
};

export default useAddCard;
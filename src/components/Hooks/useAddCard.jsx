
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";


const useAddCard = () => {
    const {user} = useAuth;
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxios()

    const {refetch, data:cart=[]}=useQuery({
        queryKey:['addCart', user?.email],

        queryFn:async()=>{
            const res = await axiosSecure(`/addCard?email=${user?.email}`)
            return res.data;
        },
    })
    //addCart
    return [cart, refetch]
};

export default useAddCard;
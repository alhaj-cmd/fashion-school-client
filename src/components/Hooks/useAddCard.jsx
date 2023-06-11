import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import { useQuery } from "@tanstack/react-query";


const useAddCard = () => {
    const {user} = useContext(AuthContext);

    const {refetch, data:cart=[]}=useQuery({
        queryKey:['addCart', user?.email],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/addCard?email=${user?.email}`)
            return res.json();
        },
    })
    //addCart
    return [cart, refetch]
};

export default useAddCard;
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";


const useInstract = () => {
    const {user} = useAuth();
    const [axiosSecure] =useAxios();
    const {data: isInstractor, isLoading: isInstractorLoadin} = useQuery({
        queryKey:['isInstractor', user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/instractor/${user?.email}`)
            return res.data.admin;
        }
    })
    return [isInstractor, isInstractorLoadin];
};

export default useInstract;
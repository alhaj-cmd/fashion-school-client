import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";


const useInstract = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] =useAxios();
    const {data: isInstractor, isLoading: isInstractorLoading} = useQuery({

        queryKey:['isInstractor', user?.email],
        enabled:!loading && !!user?.email,
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/instractor/${user?.email}`)
            return res.data.instractor;
        }
    })
    return [isInstractor, isInstractorLoading];
};

export default useInstract;
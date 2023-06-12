import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useAdmin = () => {
    const {user} = useAuth();
    const [axiosSecure] =useAxios();
    const {data: isAdmin, isLoading: isAdminLoadin} = useQuery({
        queryKey:['isAdmin', user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoadin];
};

export default useAdmin;
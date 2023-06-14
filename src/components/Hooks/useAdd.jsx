import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";



const useAdd = () => {
    const { user, loading } = useAuth()

    const [axiosSecure] = useAxios()
    const { refetch, data: manage = [] } = useQuery({
        
        queryKey: ['manage', user?.email],
        enabled: !loading,

        queryFn: async () => {
            const res = await axiosSecure(`/manage?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [manage, refetch]
}

export default useAdd;
import { useQuery } from "@tanstack/react-query";

const useClass = () => {


    const { data: myclass = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['addinstractor'],
        queryFn: async () => {
            const res = await fetch('https://y-wheat-rho.vercel.app/addinstractor');
            return res.json();
        }
    })

    return [myclass, loading, refetch]
}

export default useClass;
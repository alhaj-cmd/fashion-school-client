import { useEffect, useState } from "react";


const useHook = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/student')
        .then(res => res.json())
        .then(data => {
            setItem(data);
            setLoading(false);
        })
    },[])
    return [item, loading]
};

export default useHook;
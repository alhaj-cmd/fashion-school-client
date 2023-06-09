import { useEffect, useState } from 'react';

const useInstractor = () => {
    const [instractorItem, setinstractorItem] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/instractor')
        .then(res => res.json())
        .then(data => {
            setinstractorItem(data);
            setLoading(false);
        })
    },[])
    return [instractorItem, loading]
};

export default useInstractor;
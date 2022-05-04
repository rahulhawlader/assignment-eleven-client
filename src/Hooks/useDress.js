import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const useDress = () => {
    const { dressId } = useParams();

    const [dress, setDress] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/dress/${dressId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDress(data))
    }, [])
    return [dress, setDress]
};

export default useDress;
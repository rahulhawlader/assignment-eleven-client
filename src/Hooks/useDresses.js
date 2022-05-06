import { useEffect, useState } from "react"

const useDresses = () => {
    const [dresses, setDresses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/dress')
            .then(res => res.json())
            .then(data => setDresses(data))
    }, [])

    return [dresses]
}

export default useDresses;









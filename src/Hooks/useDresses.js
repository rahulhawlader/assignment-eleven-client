import { useEffect, useState } from "react"

const useDresses = () => {
    const [dresses, setDresses] = useState([]);
    useEffect(() => {
        fetch('https://ancient-scrubland-73255.herokuapp.com/dress')
            .then(res => res.json())
            .then(data => setDresses(data))
    }, [])

    return [dresses, setDresses]
}

export default useDresses;









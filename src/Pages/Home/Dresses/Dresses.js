import React, { useEffect, useState } from 'react';

import Dress from '../Dress/Dress';
import './Dresses.css'

const Dresses = () => {
    // const [dress, setDress] = useDress();
    const [dresses, setDresses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/dress')
            .then(res => res.json())
            .then(data => setDresses(data))

    }, [])
    return (
        <div>
            <div id="seller" className='mx-3'>
                <h1 className='h2-style'>Best Seller Dresses</h1>
                <div className='dresses-container'>{
                    dresses.slice(0, 6).map(dress => <Dress
                        key={dress._id}
                        dress={dress}
                    ></Dress>)
                }</div>
            </div>

        </div>
    );
};

export default Dresses;
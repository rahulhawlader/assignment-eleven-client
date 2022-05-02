import React, { useEffect, useState } from 'react';
import Dress from '../Dress/Dress';
import './Dresses.css'

const Dresses = () => {
    const [dresses, setDresses] = useState([])

    useEffect(() => {
        fetch('dresses.json')
            .then(res => res.json())
            .then(data => setDresses(data))

    }, [])
    return (
        <div>
            <div className='mx-3'>
                <h1 className='h2-style'>Best Seller Dresses</h1>
                <div className='dresses-container'>{
                    dresses.slice(0, 6).map(dress => <Dress
                        key={dress.id}
                        dress={dress}
                    ></Dress>)
                }</div>
            </div>

        </div>
    );
};

export default Dresses;
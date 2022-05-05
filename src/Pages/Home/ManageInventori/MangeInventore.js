import React, { useEffect, useState } from 'react';
import Dress from '../Dress/Dress';
import './MangeInventore.css'

const MangeInventore = () => {
    const [manageInventore, setManageInventore] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/dress')
            .then(res => res.json())
            .then(data => setManageInventore(data))
    }, [])
    return (
        <div>

            <div className='all-dress'>
                <h1 className='text-center text-'>All Dresses</h1>
                <div className='all-dress'>

                    {
                        manageInventore.map(dress => <Dress
                            key={dress._id}
                            dress={dress}
                        ></Dress>)
                    }
                </div>


            </div>
        </div>
    );
};

export default MangeInventore;
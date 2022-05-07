// import React, { useEffect, useState } from 'react';
import useDresses from '../../../Hooks/useDresses';

import Dress from '../Dress/Dress';
import './Dresses.css'

const Dresses = () => {

    const [dresses] = useDresses()


    return (
        <div>
            <div id="seller" className='mx-3'>
                <h1 className='h2-style'>Best Seller Dresses</h1>
                <div className='dresses-container'>{
                    dresses.slice(0, 6).map(dress => <Dress
                        key={dress._id}
                        dress={dress}

                    > </Dress>)
                }</div>
            </div>

        </div>
    );
};

export default Dresses;
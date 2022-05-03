import React from 'react';
import section3 from '../../../images/extrasection/sectionextra3.jpg'
// import background from "../../../images/extrasection/baacc.jpg"
import './SummerLook.css'

const SummerLook = () => {
    return (
        <div id='offer' className='mx-5 summer-look'>
            <div className='shadow'>
                <h1 className='text-danger'>Summer Look</h1>

                <h3>Limit <span><small>edition only</small></span> </h3>
                <h3><small>up to 50% offer For</small></h3>
                <h3> <small>18 early order worldwide</small></h3>
            </div>
            <div><img src={section3} alt="" /></div>
        </div>
    );
};

export default SummerLook;
import React from 'react';
import Benner from '../../Header/Benner/Benner';
import ContacUs from '../ContrackUs/ContacUs';
import Dresses from '../Dresses/Dresses';
import SummerLook from '../SummerLook/SummerLook';


const Home = () => {
    return (
        <div>

            <Benner></Benner>
            {/* <h1 className='text-center'>Fasion WareHouse</h1> */}
            <Dresses></Dresses>
            <SummerLook></SummerLook>
            <ContacUs></ContacUs>
        </div>
    );
};

export default Home;
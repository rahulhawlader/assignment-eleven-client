import React from 'react';
import Benner from '../../Header/Benner/Benner';
import ContacUs from '../ContrackUs/ContacUs';
import Dresses from '../Dresses/Dresses';
import SummerLook from '../SummerLook/SummerLook';


const Home = () => {
    return (
        <div>
            <h1>This Is Home</h1>
            <Benner></Benner>
            <Dresses></Dresses>
            <SummerLook></SummerLook>
            <ContacUs></ContacUs>
        </div>
    );
};

export default Home;
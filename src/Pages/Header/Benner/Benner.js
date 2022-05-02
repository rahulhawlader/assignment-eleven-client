import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import benner1 from '../../../images/benner/Benner.jpg'
import benner2 from '../../../images/benner/Benner2.jpg'
import benner3 from '../../../images/benner/Benner3.jpg'

const Benner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>

                <img
                    width={500} height={500}
                    className="d-block w-100"
                    src={benner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    width={500} height={500}
                    className="d-block w-100"
                    src={benner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    width={500} height={500}
                    className="d-block w-100"
                    src={benner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );

};

export default Benner;
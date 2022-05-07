import React from 'react';
import { Accordion } from 'react-bootstrap';

const About = () => {
    return (
        <div className='container my-5'>
            <h1 className='text-center my-5'>Blo<span className='text-primary'>gs</span></h1>
            <div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>js and node js</Accordion.Header>
                        <Accordion.Body>
                            <p>Put it simply. Javascript ia a programing language traditionally those programs have only run in browsers.</p>

                            <p>Node.js is a framework developed in javascript. Which help us run in normal machines or servers.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>when should you use node js nd mongo db </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Could be that I'm not explaining myself well enough.. In any case, I really need to dig into node.js further :) I'm not worried about the optimizations as much as I am the overall system architecture. I realize the benefits of scripting some of the subsystems, but I can't see developing an entire system framework in Javascript lending itself well to extensibility, etc which is why I was mentioning the loss that you'd suffer from veering away from using a strong typed, OO, compiled language as your base </p>
                            <p>MongoDB is a general-purpose database used in various ways to support applications in many different industries (e.g., telecommunications, gaming, finances, healthcare, and retail). MongoDB has found a home in many different businesses and functions because it solves long-standing problems in data management and software development. Typical use cases for MongoDB include:</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>what is the purpose of jwt how does it work</Accordion.Header>
                        <Accordion.Body>
                            <p> JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default About;
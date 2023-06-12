import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function QuizSlider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        console.log(selectedIndex);
        setIndex(selectedIndex);
    };

    return (
        <div id="participate" className='QuizSliderContainer'>
            <Carousel activeIndex={index} onSelect={handleSelect} className='QuizSlider'>
                <Carousel.Item>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <button onClick={handleSelect}>KEK</button>
                </Carousel.Item>
                <Carousel.Item>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button onClick={handleSelect}>KEK</button>
                </Carousel.Item>
                <Carousel.Item>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <button onClick={handleSelect}>KEK</button>
                </Carousel.Item>
            </Carousel>
        </div>

    );
}


import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function QuizSlider() {
    const [index, setIndex] = useState(0);

    const incrementSlide = (selectedIndex, e) => {
        setIndex(index + 1);
    };

    const decrementSlide = (selectedIndex, e) => {
        setIndex(index - 1);
    };

    return (
        <div id="participate" className='QuizSliderContainer'>
            <Carousel activeIndex={index} className='QuizSlider' interval={null}>
                <Carousel.Item>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} />
                </Carousel.Item>
            </Carousel>
        </div>

    );
}

function Controls({ incrementSlide, decrementSlide }) {
    return (
        <>
            <button className="CarouselPrevButton" onClick={decrementSlide}>Prev</button>
            <button className="CarouselNextButton" onClick={incrementSlide}>Next</button>
        </>
    );
}
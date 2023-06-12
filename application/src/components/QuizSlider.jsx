import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function QuizSlider() {
    const [index, setIndex] = useState(0);
    const [slideCount, setSlideCount] = useState(null);

    const incrementSlide = (selectedIndex, e) => {
        setIndex(index + 1);
    };

    const decrementSlide = (selectedIndex, e) => {
        setIndex(index - 1);
    };

    useEffect(() => {
        const slides = document.getElementsByClassName("carousel-item");
        setSlideCount(slides.length - 1 );
    }, []);


    return (
        <div id="participate" className='QuizSliderContainer' >
            <Carousel activeIndex={index} className='QuizSlider' interval={null} slide={false}>
                <Carousel.Item>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
                </Carousel.Item>
            </Carousel>
        </div>

    );
}

function Controls({ incrementSlide, decrementSlide, index, slideCount, handleSubmit }) {
    if (index === 0) {
        return (
            <>
                <button className="CarouselNextButton CarouselControl" onClick={incrementSlide}>Next</button>
            </>
        );
    }

    if (index === slideCount) {
        return (
            <button className="CarouselNextButton CarouselControl" onClick={handleSubmit}>Submit</button>
        );
    }

    return (
        <>
            <button className="CarouselNextButton CarouselControl" onClick={incrementSlide}>Next</button>
            <button className="CarouselPrevButton CarouselControl" onClick={decrementSlide}>Prev</button>
        </>
    );
}
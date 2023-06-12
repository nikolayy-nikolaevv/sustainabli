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
        setSlideCount(slides.length - 1);
    }, []);


    return (
        <div id="participate" className='QuizSliderContainer' >
            <Carousel activeIndex={index} className='QuizSlider' interval={null} slide={false}>
                <Carousel.Item>
                    <h3>Which of the following technology products have you purchased that use lithium batteries? (Select all that apply)</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>How long does the lithium battery typically last in the products you have purchased?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>Have you ever experienced safety issues with the use of lithium batteries in the products you have purchased?</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>If you answered yes to the previous question, what safety issues have you encountered? (Select all that apply)</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>How do you dispose of used or defective lithium batteries from the products you have purchased?</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>How important is the battery life of a technology product to you when making a purchase?</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>How important is the safety of the battery in a technology product to you when making a purchase?</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>How do you see the use of lithium batteries in technology evolving in the future?</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>How old are you?</h3>
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
            <>
                <button className="CarouselPrevButton CarouselControl" onClick={decrementSlide}>Prev</button>
                <button className="CarouselNextButton CarouselControl" onClick={handleSubmit}>Submit</button>
            </>
        );
    }

    return (
        <>
            <button className="CarouselNextButton CarouselControl" onClick={incrementSlide}>Next</button>
            <button className="CarouselPrevButton CarouselControl" onClick={decrementSlide}>Prev</button>
        </>
    );
}
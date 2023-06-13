import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Form} from "react-bootstrap";

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
                    <h3>Which of the following technology products have you purchased that use lithium batteries?</h3>
                    <p>(Select all that apply)</p>
                    <Form>

                            <div key={`default-checkbox`} className="mb-3">
                                <Form.Check
                                    type={"checkbox"}
                                    id={`default-checkbox`}
                                    label={'Smartphones'}
                                />
                                <Form.Check
                                    type={"checkbox"}
                                    id={`default-checkbox`}
                                    label={'Laptops'}
                                />
                                <Form.Check
                                    type={"checkbox"}
                                    id={`default-checkbox`}
                                    label={'Tablets'}
                                />
                                <Form.Check
                                    type={"checkbox"}
                                    id={`default-checkbox`}
                                    label={'Wearables'}
                                />
                                <Form.Check
                                    type={"checkbox"}
                                    id={`default-checkbox`}
                                    label={'Electric Vehicles'}
                                />
                            </div>
                    </Form>

                    <h3>How long does the lithium battery typically last in the products you have purchased?
                    </h3>
                    <>
                        <Form>

                                <div key={`default-radio`} className="mb-3">
                                    <Form.Check
                                        type={"radio"}
                                        id={`default-radio`}
                                        name="group1"
                                        label={`less than 1 year`}
                                    />
                                    <Form.Check
                                        type={"radio"}
                                        id={`default-radio1`}
                                        name="group1"
                                        label={`1 year`}
                                    />
                                    <Form.Check
                                        type={"radio"}
                                        id={`default-radio2`}
                                        name="group1"
                                        label={`2-3 years`}
                                    />
                                    <Form.Check
                                        type={"radio"}
                                        id={`default-radio3`}
                                        name="group1"
                                        label={`more than 3 years`}
                                    />
                                </div>
                        </Form>
                    </>
                    <Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>Have you ever experienced safety issues with the use of lithium batteries in the products you have purchased?</h3>
                    <Form>
                        <div key={'default-radio'} className="mb-3">
                            <Form.Check
                                type={"radio"}
                                id={`default-radio4`}
                                name="group2"
                                label={`Yes`}
                            />
                            <Form.Check
                                type={"radio"}
                                id={`default-radio5`}
                                name="group2"
                                label={`No`}
                            />
                        </div>
                    </Form>
                    <>
                        <h3>If you answered yes to the previous question, what safety issues have you encountered?</h3>
                        <p>(Select all that apply)</p>
                        <Form>
                        <div key={`default-checkbox`} className="mb-3">
                            <Form.Check
                                type={"checkbox"}
                                id={`default-checkbox`}
                                label={'Overheating'}
                            />
                            <Form.Check
                                type={"checkbox"}
                                id={`default-checkbox`}
                                label={'Deformation'}
                            />
                            <Form.Check
                                type={"checkbox"}
                                id={`default-checkbox`}
                                label={'Fire'}
                            />
                            <Form.Check
                                type={"checkbox"}
                                id={`default-checkbox`}
                                label={'Explosion'}
                            />
                        </div>
                        </Form>

                    </>
                    <Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>How do you dispose of used or defective lithium batteries from the products you have purchased?</h3>
                    <Form>
                        <div key={`default-checkbox`} className="mb-3">
                            <Form.Check
                                type={"checkbox"}
                                id={`default-checkbox`}
                                label={'Recycling center'}
                            />
                            <Form.Check
                                type={"checkbox"}
                                id={`default-checkbox`}
                                label={'Regular trash'}
                            />
                            <Form.Check
                                type={"checkbox"}
                                id={`default-checkbox`}
                                label={'Ma`am i eat my own batteries '}
                            />
                        </div>
                    </Form>
                    <h3>How important is the battery life of a technology product to you when making a purchase?</h3>
                    <>
                    <Form>
                        <div key={'inline-radio'} className="my-5">
                            <Form.Check
                                className={"mx-4"}
                                inline
                                type={"radio"}
                                id={`inline-radio1`}
                                name="group3"
                                label={`Not important at all`}
                            />
                            <Form.Check
                                className={"mx-4"}
                                inline
                                type={"radio"}
                                id={`inline-radio2`}
                                name="group3"
                                label={`Not very important`}
                            />
                            <Form.Check
                                className={"mx-4"}
                                inline
                                type={"radio"}
                                id={`inline-radio5`}
                                name="group3"
                                label={`I don't care`}
                            />
                            <Form.Check
                                className={"mx-4"}
                                inline
                                type={"radio"}
                                id={`inline-radio3`}
                                name="group3"
                                label={`Somewhat important`}
                            />
                            <Form.Check
                                className={"mx-4"}
                                inline
                                type={"radio"}
                                id={`inline-radio4`}
                                name="group3"
                                label={`Very important`}
                            />
                        </div>
                    </Form>

                </>

                    <Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>How important is the safety of the battery in a technology product to you when making a purchase?</h3>
                    <Form>
                        <div key={'inline-radio'} className="my-5">
                            <Form.Check
                                className={"mx-4"}
                                inline
                                type={"radio"}
                                id={`inline-radio6`}
                                name="group4"
                                label={`Not important at all`}
                            />
                            <Form.Check
                                className={"mx-4"}
                                inline
                                type={"radio"}
                                id={`inline-radio7`}
                                name="group4"
                                label={`Not very important`}
                            />
                            <Form.Check
                                className={"mx-4"}
                                inline
                                type={"radio"}
                                id={`inline-radio8`}
                                name="group4"
                                label={`I don't care`}
                            />
                            <Form.Check
                                className={"mx-4"}
                                inline
                                type={"radio"}
                                id={`inline-radio9`}
                                name="group4"
                                label={`Somewhat important`}
                            />
                            <Form.Check
                                className={"mx-4"}
                                inline
                                type={"radio"}
                                id={`inline-radio10`}
                                name="group4"
                                label={`Very important`}
                            />
                        </div>
                    </Form>
                    <h3>How do you see the use of lithium batteries in technology evolving in the future?</h3>
                    <Form>
                        <div key={`default-radio`} className="mb-3">
                            <Form.Check
                                type={"radio"}
                                id={`default-radio6`}
                                name="group5"
                                label={`Becoming less prevalent`}
                            />
                            <Form.Check
                                type={"radio"}
                                id={`default-radio7`}
                                name="group5"
                                label={`Remaining the same`}
                            />
                            <Form.Check
                                type={"radio"}
                                id={`default-radio8`}
                                name="group5"
                                label={`Becoming more prevalent`}
                            />
                        </div>
                    </Form>

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
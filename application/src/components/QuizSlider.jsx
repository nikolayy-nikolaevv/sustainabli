import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Form } from "react-bootstrap";

export default function QuizSlider() {
	const [index, setIndex] = useState(0);
	const [slideCount, setSlideCount] = useState(null);

	const incrementSlide = (selectedIndex, e) => {
		setIndex(index + 1);
	};

	const decrementSlide = (selectedIndex, e) => {
		setIndex(index - 1);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formFields = document.querySelectorAll('.form-check-input:checked');
		var sum = 0;

		formFields.forEach(field => {
			sum += field.checked ? Number(field.value) : 0;
		});

		fetch("http://localhost:8000/survey", {
			method: "POST",
			body: JSON.stringify({"result": sum}),
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			}
		});
	}

	useEffect(() => {
		const slides = document.getElementsByClassName("carousel-item");
		setSlideCount(slides.length - 1);
	}, []);


	return (
		<div id="participate" className='QuizSliderContainer' >
			<Form onSubmit={handleSubmit}>
				<Carousel activeIndex={index} className='QuizSlider' interval={null} slide={false}>
					<Carousel.Item>
						<div className="QuizQuestion">
							<h3>Which of the following technology products have you purchased that use lithium batteries?</h3>
							<p>(Select all that apply)</p>
							<div key={`default-checkbox`}>
								<Form.Check
									value={0}
									type={"checkbox"}
									name={'question1'}
									id={`q-1-a-1`}
									label={'Smartphones'}
								/>
								<Form.Check
									value={0}
									type={"checkbox"}
									name={'question1'}
									id={`q-1-a-2`}
									label={'Laptops'}
								/>
								<Form.Check
									value={0}
									type={"checkbox"}
									name={'question1'}
									id={`q-1-a-3`}
									label={'Tablets'}
								/>
								<Form.Check
									value={0}
									type={"checkbox"}
									name={'question1'}
									id={`q-1-a-4`}
									label={'Wearables'}
								/>
								<Form.Check
									value={0}
									type={"checkbox"}
									name={'question1'}
									id={`q-1-a-5`}
									label={'Electric Vehicles'}
								/>
							</div>
						</div>
						<div className="QuizQuestion">
							<h3>Have you ever altered your purchasing decisions based on a company's environmental policies and commitment to sustainable practices?</h3>
							<div key={'inline-radio'} className="my-4 radio-inline">
								<Form.Check
									value={0}
									inline
									className={"mx-5"}
									type={"radio"}
									id={`q-2-a-1`}
									name={"question2"}
									label={`No, never`}
								/>
								<Form.Check
									value={2.5}
									inline
									className={"mx-5"}
									type={"radio"}
									id={`q-2-a-2`}
									name={"question2"}
									label={`Rarely`}
								/>
								<Form.Check
									value={5}
									inline
									className={"mx-5"}
									type={"radio"}
									id={`q-2-a-3`}
									name={"question2"}
									label={`Occasionally`}
								/>
								<Form.Check
									value={7.5}
									inline
									className={"mx-5"}
									type={"radio"}
									id={`q-2-a-4`}
									name={"question2"}
									label={`Yes, frequently`}
								/>
							</div>
						</div>
						<Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
					</Carousel.Item>
					<Carousel.Item>
						<div className="QuizQuestion">
							<h3>How important is it for you to have clear information about the environmental impact of lithium usage provided by manufacturers when purchasing electronic devices?</h3>
							<div key={'inline-radio'} className="my-4 radio-inline">
								<Form.Check
									value={0}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-3-a-1`}
									name={"question3"}
									label={`Not important at all`}
								/>
								<Form.Check
									value={2.5}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-3-a-2`}
									name={"question3"}
									label={`Not very important`}
								/>
								<Form.Check
									value={5}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-3-a-3`}
									name={"question3"}
									label={`I don't care`}
								/>
								<Form.Check
									value={7.5}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-3-a-4`}
									name={"question3"}
									label={`Somewhat important`}
								/>
								<Form.Check
									value={10}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-3-a-5`}
									name={"question3"}
									label={`Very important`}
								/>
							</div>
						</div>
						<div className="QuizQuestion">
							<h3>In your opinion, how important is it for companies to prioritize environmentally friendly practices when manufacturing products that contain lithium?</h3>
							<div key={'inline-radio'} className="my-4 radio-inline">
								<Form.Check
									value={0}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-4-a-1`}
									name={"question4"}
									label={`Not important at all`}
								/>
								<Form.Check
									value={2.5}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-4-a-2`}
									name={"question4"}
									label={`Not very important`}
								/>
								<Form.Check
									value={5}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-4-a-3`}
									name={"question4"}
									label={`I don't care`}
								/>
								<Form.Check
									value={7.5}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-4-a-4`}
									name={"question4"}
									label={`Somewhat important`}
								/>
								<Form.Check
									value={10}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-4-a-5`}
									name={"question4"}
									label={`Very important`}
								/>
							</div>
						</div>
						<div className="QuizQuestion">
							<h3>How important is the battery life of a technology product to you when making a purchase?</h3>
							<div key={'inline-radio'} className="my-4 radio-inline">
								<Form.Check
									value={0}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-5-a-1`}
									name={"question5"}
									label={`Not important at all`}
								/>
								<Form.Check
									value={2.5}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-5-a-2`}
									name={"question5"}
									label={`Not very important`}
								/>
								<Form.Check
									value={5}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-5-a-3`}
									name={"question5"}
									label={`I don't care`}
								/>
								<Form.Check
									value={7.5}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-5-a-4`}
									name={"question5"}
									label={`Somewhat important`}
								/>
								<Form.Check
									value={10}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-5-a-5`}
									name={"question5"}
									label={`Very important`}
								/>
							</div>
						</div>
						<Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
					</Carousel.Item>
					<Carousel.Item>
						<div className="QuizQuestion">
							<h3>How long does the lithium battery typically last in the products you have purchased?
							</h3>
							<div key={`default-radio`} className="mb-3">
								<Form.Check
									value={0}
									type={"radio"}
									id={`q-6-a-1`}
									name={"question6"}
									label={`less than 1 year`}
								/>
								<Form.Check
									value={2.5}
									type={"radio"}
									id={`q-6-a-2`}
									name={"question6"}
									label={`1-2 years`}
								/>
								<Form.Check
									value={5}
									type={"radio"}
									id={`q-6-a-3`}
									name={"question6"}
									label={`2-3 years`}
								/>
								<Form.Check
									value={7.5}
									type={"radio"}
									id={`q-6-a-4`}
									name={"question6"}
									label={`more than 3 years`}
								/>
							</div>
						</div>
						<div className="QuizQuestion">
							<h3>How do you dispose of used or defective lithium batteries from the products you have purchased?</h3>
							<div key={`default-checkbox`} className="mb-3">
								<Form.Check
									value={7.5}
									type={"checkbox"}
									id={`q-7-a-1`}
									name={"question7"}
									label={'Recycling center'}
								/>
								<Form.Check
									value={2.5}
									type={"checkbox"}
									id={`q-7-a-2`}
									name={"question7"}
									label={'Regular trash'}
								/>
								<Form.Check
									value={-5}
									type={"checkbox"}
									id={`q-7-a-3`}
									name={"question7"}
									label={'Ma`am i eat my own batteries '}
								/>
							</div>
						</div>
						<Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
					</Carousel.Item>
					<Carousel.Item>
						<div className="QuizQuestion">
							<h3>Have you ever considered the environmental impact of lithium extraction and disposal when using these devices?</h3>
							<div key={'inline-radio'} className="my-4 radio-inline">
								<Form.Check
									value={0}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-8-a-1`}
									name={"question8"}
									label={`No, haven't considered it`}
								/>
								<Form.Check
									value={2.5}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-8-a-2`}
									name={"question8"}
									label={`Rarely`}
								/>
								<Form.Check
									value={5}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-8-a-3`}
									name={"question8"}
									label={`Occasionally`}
								/>
								<Form.Check
									value={7.5}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-8-a-4`}
									name={"question8"}
									label={`Yes, frequently`}
								/>
							</div>
						</div>
						<div className="QuizQuestion">
							<h3>How willing are you to pay a premium for products that are environmentally friendly and have a reduced environmental impact?</h3>
							<div key={'inline-radio'} className="my-4 radio-inline">
								<Form.Check
									value={0}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-9-a-1`}
									name={"question9"}
									label={`Very unwilling`}
								/>
								<Form.Check
									value={2.5}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-9-a-2`}
									name={"question9"}
									label={`Somewhat unwilling`}
								/>
								<Form.Check
									value={5}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-9-a-3`}
									name={"question9"}
									label={`I don't care`}
								/>
								<Form.Check
									value={7.5}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-9-a-4`}
									name={"question9"}
									label={`Somewhat willing`}
								/>
								<Form.Check
									value={10}
									className={"mx-5"}
									inline
									type={"radio"}
									id={`q-9-a-5`}
									name={"question9"}
									label={`Very willing`}
								/>
							</div>
						</div>
						<Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
					</Carousel.Item>
					<Carousel.Item>
						<div className="QuizQuestion">
							<h3>What actions do you take to be more nature-friendly when using products that contain lithium? (Select all that apply)</h3>
							<div key={`default-checkbox`} className="mb-3">
								<Form.Check
									value={5}
									type={"checkbox"}
									name={'question10'}
									id={`q-10-a-1`}
									label={'Recycling electronic devices properly'}
								/>
								<Form.Check
									value={5}
									type={"checkbox"}
									name={'question10'}
									id={`q-10-a-2`}
									label={'Using energy-efficient settings on devices'}
								/>
								<Form.Check
									value={5}
									type={"checkbox"}
									name={'question10'}
									id={`q-10-a-3`}
									label={'Participating in lithium battery recycling programs'}
								/>
								<Form.Check
									value={5}
									type={"checkbox"}
									name={'question10'}
									id={`q-10-a-4`}
									label={'Purchasing devices from environmentally conscious brands'}
								/>
								<Form.Check
									value={5}
									type={"checkbox"}
									name={'question10'}
									id={`q-10-a-5`}
									label={'Educating others about the environmental impact of lithium extraction and disposal'}
								/>
							</div>
						</div>
						<div className="QuizQuestion">
							<h3>How do you see the use of lithium batteries in technology evolving in the future?</h3>
							<div key={`default-radio`} className="mb-3">
								<Form.Check
									value={0}
									type={"radio"}
									id={`q-11-a-1`}
									name={"question11"}
									label={`Becoming less prevalent`}
								/>
								<Form.Check
									value={2.5}
									type={"radio"}
									id={`q-11-a-2`}
									name={"question11"}
									label={`Remaining the same`}
								/>
								<Form.Check
									value={5}
									type={"radio"}
									id={`q-11-a-3`}
									name={"question11"}
									label={`Becoming more prevalent`}
								/>
							</div>
						</div>
						<Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
					</Carousel.Item>
				</Carousel>
			</Form>
		</div>

	);
}

function Controls({ incrementSlide, decrementSlide, index, slideCount }) {
	if (index === 0) {
		return (
			<>
				<button className="CarouselNextButton CarouselControl" onClick={incrementSlide} type="button">Next</button>
			</>
		);
	}

	if (index === slideCount) {
		return (
			<>
				<button className="CarouselPrevButton CarouselControl" onClick={decrementSlide} type="button">Back</button>
				<button className="CarouselNextButton CarouselControl" type="submit">Submit</button>
			</>
		);
	}

	return (
		<>
			<button className="CarouselNextButton CarouselControl" onClick={incrementSlide} type="button">Next</button>
			<button className="CarouselPrevButton CarouselControl" onClick={decrementSlide} type="button">Back</button>
		</>
	);
}
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
		const formData = new FormData();
		formFields.forEach(field => {
			console.log(field.checked);
		});

		fetch("http://localhost:8000/survey", {
			method: "POST",
			data: formFields,
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
						<h3>Which of the following technology products have you purchased that use lithium batteries?</h3>
						<p>(Select all that apply)</p>
						<div key={`default-checkbox`} className="mb-3">
							<Form.Check
								value={-5}
								type={"checkbox"}
								name={'question1'}
								id={`q-1-a-1`}
								label={'Smartphones'}
							/>
							<Form.Check
								value={-5}
								type={"checkbox"}
								name={'question1'}
								id={`q-1-a-2`}
								label={'Laptops'}
							/>
							<Form.Check
								value={-5}
								type={"checkbox"}
								name={'question1'}
								id={`q-1-a-3`}
								label={'Tablets'}
							/>
							<Form.Check
								value={-5}
								type={"checkbox"}
								name={'question1'}
								id={`q-1-a-4`}
								label={'Wearables'}
							/>
							<Form.Check
								value={-5}
								type={"checkbox"}
								name={'question1'}
								id={`q-1-a-5`}
								label={'Electric Vehicles'}
							/>
						</div>

						<h3>How long does the lithium battery typically last in the products you have purchased?
						</h3>


						<div key={`default-radio`} className="mb-3">
							<Form.Check
								value={-10}
								defaultChecked
								type={"radio"}
								id={`q-2-a-1`}
								name={"question2"}
								label={`less than 1 year`}
							/>
							<Form.Check
								value={-5}
								type={"radio"}
								id={`q-2-a-2`}
								name={"question2"}
								label={`1-2 years`}
							/>
							<Form.Check
								value={0}
								type={"radio"}
								id={`q-2-a-3`}
								name={"question2"}
								label={`2-3 years`}
							/>
							<Form.Check
								value={5}
								type={"radio"}
								id={`q-2-a-4`}
								name={"question2"}
								label={`more than 3 years`}
							/>
						</div>

						<Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
					</Carousel.Item>
					<Carousel.Item>
						<h3>Have you ever experienced safety issues with the use of lithium batteries in the products you have purchased?</h3>
						<div key={'default-radio'} className="mb-3">
							<Form.Check
								type={"radio"}
								id={`q-3-a-1`}
								name={"question3"}
								label={`Yes`}
								value={0}
							/>
							<Form.Check
								defaultChecked
								type={"radio"}
								id={`q-3-a-2`}
								name={"question3"}
								label={`No`}
								value={5}
							/>
						</div>
						<h3>If you answered yes to the previous question, what safety issues have you encountered?</h3>
						<p>(Select all that apply)</p>
						<div key={`default-checkbox`} className="mb-3">
							<Form.Check
								value={-5}
								type={"checkbox"}
								id={`q-4-a-1`}
								name={"question4"}
								label={'Overheating'}
							/>
							<Form.Check
								value={-5}
								type={"checkbox"}
								id={`q-4-a-2`}
								name={"question4"}
								label={'Deformation'}
							/>
							<Form.Check
								value={-5}
								type={"checkbox"}
								id={`q-4-a-3`}
								name={"question4"}
								label={'Fire'}
							/>
							<Form.Check
								value={-5}
								type={"checkbox"}
								id={`q-4-a-4`}
								name={"question4"}
								label={'Explosion'}
							/>
						</div>
						<Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
					</Carousel.Item>
					<Carousel.Item>
						<h3>How do you dispose of used or defective lithium batteries from the products you have purchased?</h3>
						<div key={`default-checkbox`} className="mb-3">
							<Form.Check
								value={10}
								type={"checkbox"}
								id={`q-5-a-1`}
								name={"question5"}
								label={'Recycling center'}
							/>
							<Form.Check
								value={0}
								type={"checkbox"}
								id={`q-5-a-2`}
								name={"question5"}
								label={'Regular trash'}
							/>
							<Form.Check
								value={-5}
								type={"checkbox"}
								id={`q-5-a-3`}
								name={"question5"}
								label={'Ma`am i eat my own batteries '}
							/>
						</div>
						<h3>How important is the battery life of a technology product to you when making a purchase?</h3>
						<div key={'inline-radio'} className="my-5">
							<Form.Check
								value={-10}
								className={"mx-4"}
								inline
								type={"radio"}
								id={`q-6-a-1`}
								name={"question6"}
								label={`Not important at all`}
							/>
							<Form.Check
								value={-5}
								className={"mx-4"}
								inline
								type={"radio"}
								id={`q-6-a-2`}
								name={"question6"}
								label={`Not very important`}
							/>
							<Form.Check
								value={0}
								defaultChecked
								className={"mx-4"}
								inline
								type={"radio"}
								id={`q-6-a-3`}
								name={"question6"}
								label={`I don't care`}
							/>
							<Form.Check
								value={5}
								className={"mx-4"}
								inline
								type={"radio"}
								id={`q-6-a-4`}
								name={"question6"}
								label={`Somewhat important`}
							/>
							<Form.Check
								value={10}
								className={"mx-4"}
								inline
								type={"radio"}
								id={`q-6-a-5`}
								name={"question6"}
								label={`Very important`}
							/>
						</div>
						<Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
					</Carousel.Item>
					<Carousel.Item>
						<h3>How important is the safety of the battery in a technology product to you when making a purchase?</h3>
						<div key={'inline-radio'} className="my-5">
							<Form.Check
								value={-10}
								className={"mx-4"}
								inline
								type={"radio"}
								id={`q-7-a-1`}
								name={"question7"}
								label={`Not important at all`}
							/>
							<Form.Check
								value={-5}
								className={"mx-4"}
								inline
								type={"radio"}
								id={`q-7-a-2`}
								name={"question7"}
								label={`Not very important`}
							/>
							<Form.Check
								value={0}
								defaultChecked
								className={"mx-4"}
								inline
								type={"radio"}
								id={`q-7-a-3`}
								name={"question7"}
								label={`I don't care`}
							/>
							<Form.Check
								value={5}
								className={"mx-4"}
								inline
								type={"radio"}
								id={`q-7-a-4`}
								name={"question7"}
								label={`Somewhat important`}
							/>
							<Form.Check
								value={10}
								className={"mx-4"}
								inline
								type={"radio"}
								id={`q-7-a-5`}
								name={"question7"}
								label={`Very important`}
							/>
						</div>
						<h3>How do you see the use of lithium batteries in technology evolving in the future?</h3>
						<div key={`default-radio`} className="mb-3">
							<Form.Check
								value={-5}
								type={"radio"}
								id={`q-8-a-1`}
								name={"question8"}
								label={`Becoming less prevalent`}
							/>
							<Form.Check
								value={0}
								defaultChecked
								type={"radio"}
								id={`q-8-a-2`}
								name={"question8"}
								label={`Remaining the same`}
							/>
							<Form.Check
								value={5}
								type={"radio"}
								id={`q-8-a-3`}
								name={"question8"}
								label={`Becoming more prevalent`}
							/>
						</div>

						<Controls incrementSlide={incrementSlide} decrementSlide={decrementSlide} index={index} slideCount={slideCount} />
					</Carousel.Item>
				</Carousel>
			</Form>
		</div>

	);
}

function Controls({ incrementSlide, decrementSlide, index, slideCount, handleSubmit }) {
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
				<button className="CarouselPrevButton CarouselControl" onClick={decrementSlide} type="button">Prev</button>
				<button className="CarouselNextButton CarouselControl" type="submit">Submit</button>
			</>
		);
	}

	return (
		<>
			<button className="CarouselNextButton CarouselControl" onClick={incrementSlide} type="button">Next</button>
			<button className="CarouselPrevButton CarouselControl" onClick={decrementSlide} type="button">Prev</button>
		</>
	);
}
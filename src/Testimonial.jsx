import React, { useState } from 'react'

const Testimonial = () => {
    // State to keep track of the current testimonial index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Array of testimonial objects
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            image: 'https://randomuser.me/api/portraits/men/1.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 2,
            name: 'Rohit',
            image: 'https://randomuser.me/api/portraits/men/2.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 3,
            name: 'prince',
            image: 'https://randomuser.me/api/portraits/men/3.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ];

    // Function to go to the previous testimonial
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    // Function to go to the next testimonial
    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className='testimonial-container'>
            {/* Display the current testimonial */}
            <div key={testimonials[currentIndex].id} className='testimonial'>
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                <h3>{testimonials[currentIndex].name}</h3>
                <p>{testimonials[currentIndex].text}</p>
            </div>
            
            {/* Navigation buttons */}
         <div className='navigation'>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
         </div>
        </div>
    )
}

export default Testimonial
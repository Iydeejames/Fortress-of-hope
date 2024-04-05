import React, { useState } from 'react';
import firstPhoto from '../assets/imgs/FI5.JPG';
import secondPhoto from '../assets/imgs/FI21.JPG';


const PastorsSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleStory = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='pastors-section'>
            <h2>Meet Our Pastors</h2>
            <div className='cards-container'>
                <div className='card-content'>
                    <img src={firstPhoto} alt='Rev Amba' />
                    <h3>Rev. Princa Amba<span> (General Overseer) </span></h3>
                    <div className='story-btn' onClick={toggleStory}>
                        About
                        <div className='story-btn-line'></div>
                    </div>
                    {isOpen && (
                        <div className='story'>
                            <p className='story-paragraph'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam eveniet pariatur ullam tempore tempora.</p>
                        </div>
                    )}
                </div>

                <div className='card-content'>
                    <img src={secondPhoto} alt='Dr. Evelyn' />
                    <h3>Dr. Evelyn Amba<span> (Lead Pastor) </span></h3>
                    <div className='story-btn' onClick={toggleStory}>
                        About
                        <div className='story-btn-line'></div>
                    </div>
                    {isOpen && (
                        <div className='story'>
                            <p className='story-paragraph'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam eveniet pariatur ullam tempore tempora.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PastorsSection;

import React, { useState } from 'react';
import firstPhoto from '../assets/imgs/FI5.JPG';
import secondPhoto from '../assets/imgs/FI21.JPG';

const PastorsSection = () => {
    const [isOpenFirst, setIsOpenFirst] = useState(false);
    const [isOpenSecond, setIsOpenSecond] = useState(false);

    const toggleStoryFirst = () => {
        setIsOpenFirst(!isOpenFirst);
        setIsOpenSecond(false); // Close the second card when opening the first one
    };

    const toggleStorySecond = () => {
        setIsOpenSecond(!isOpenSecond);
        setIsOpenFirst(false); // Close the first card when opening the second one
    };

    return (
        <div className='pastors-section'>
            <h2>Meet Our Pastors</h2>
            <div className='cards-container'>
                <div className='card-content'>
                    <img src={firstPhoto} alt='Rev Amba' style={{ opacity: isOpenFirst ? 0 : 1 }} />
                    <h3>Rev. Prince Amba<span> (General Overseer) </span></h3>
                    <div className='story-btn' onClick={toggleStoryFirst}>
                        About
                        <div className='story-btn-line'></div>
                    </div>
                    {isOpenFirst && (
                        <div className='story'>
                            <p className='story-paragraph'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam eveniet pariatur ullam tempore tempora.</p>
                        </div>
                    )}
                </div>

                <div className='card-content'>
                    <img src={secondPhoto} alt='Dr. Evelyn' style={{ opacity: isOpenSecond ? 0 : 1 }} />
                    <h3>Dr. Evelyn Amba<span> (Lead Pastor) </span></h3>
                    <div className='story-btn' onClick={toggleStorySecond}>
                        About
                        <div className='story-btn-line'></div>
                    </div>
                    {isOpenSecond && (
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

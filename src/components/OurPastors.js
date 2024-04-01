import React from 'react';

import firstPhoto from '../assets/imgs/FI5.JPG';
import secondPhoto from '../assets/imgs/FI21.JPG';

const PastorsSection = ()=> {


 return (
 <div className='pastors-section'>
    <h2>Meet Our Pastors</h2>
    <div className='cards-container'>
        <div className='card-content'>
          <img src={firstPhoto} alt='Rev Amba'/>
          <h3> Rev. Princa Amba</h3>
           <p>The mission of this organization is to be independent of any political ideology,
            religious doctrine, and economic interest but rather a value-adding organization driving the
            African development process through every positive means.
            To ensure the active participation of youths in the development of Africa.
           </p>
           <div className='story-btn'>About
           <div className='story-btn-line'></div>
           </div>
           <div class="story">
                        <h4>Our General Overseer</h4>
                        <p className="story-paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit Aperiam eveniet pariatur ullam tempore tempora.</p>
                    </div>
    </div>

    <div className='card-content'>
          <img src={secondPhoto} alt='Dr. Evelyn'/>
          <h3> Dr. Evelyn Amba</h3>
           <p>The mission of this organization is to be independent of any political ideology,
            religious doctrine, and economic interest but rather a value-adding organization driving the
            African development process through every positive means.
            To ensure the active participation of youths in the development of Africa.
           </p>
           <div className='story-btn'>About
           <div className='story-btn-line'></div>
           </div>
           <div class="story">
                        <h4>Our Pastor</h4>
                        <p className="story-paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit Aperiam eveniet pariatur ullam tempore tempora.</p>
                    </div>
    </div>
    </div>
 </div>
  ) 
}

export default PastorsSection;

import React from 'react';
import './SectionHeading.scss'
const SectionHeading = (props) => {
  return (
    <div className='section__heading'>
      <h1>{props.text}</h1>
      <div className='section__heading-line'></div>
    </div>
  )
}

export default SectionHeading
import React, { useEffect } from 'react';
import getNumber from '../../Service/api';
import './MainDisplay-styles.scss';

const MainDisplay: React.FC = () => {

  useEffect(() => {
    getNumber().then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  },[])
  return (
    <div className='Display__Container'>
      <div className='Display__Header'>
        <h1 className='Display__First'>QUAL É O NÚMERO?</h1>
        <div className='Display__Trace'></div>
      </div>
      {/* Display__Ligth- NUMBER */}
      <div className='Display__Content'>
        <div className="Display__Box--1 ">
          <div className="Display__Segment--A"><span className="Display__Span Display__Span--A"></span></div>
          <div className="Display__Segment--B"><span className="Display__Span Display__Span--B"></span></div>
          <div className="Display__Segment--C"><span className="Display__Span Display__Span--C"></span></div>
          <div className="Display__Segment--D"><span className="Display__Span Display__Span--D"></span></div>
          <div className="Display__Segment--E"><span className="Display__Span Display__Span--E"></span></div>
          <div className="Display__Segment--F"><span className="Display__Span Display__Span--F"></span></div>
          <div className="Display__Segment--G"><span className="Display__Span Display__Span--G"></span></div>
        </div>
        <div className="Display__Box--2">
          <div className="Display__Segment--A"><span className="Display__Span Display__Span--A"></span></div>
          <div className="Display__Segment--B"><span className="Display__Span Display__Span--B"></span></div>
          <div className="Display__Segment--C"><span className="Display__Span Display__Span--C"></span></div>
          <div className="Display__Segment--D"><span className="Display__Span Display__Span--D"></span></div>
          <div className="Display__Segment--E"><span className="Display__Span Display__Span--E"></span></div>
          <div className="Display__Segment--F"><span className="Display__Span Display__Span--F"></span></div>
          <div className="Display__Segment--G"><span className="Display__Span Display__Span--G"></span></div>
        </div>
        <div className="Display__Box--3">
          <div className="Display__Segment--A"><span className="Display__Span Display__Span--A"></span></div>
          <div className="Display__Segment--B"><span className="Display__Span Display__Span--B"></span></div>
          <div className="Display__Segment--C"><span className="Display__Span Display__Span--C"></span></div>
          <div className="Display__Segment--D"><span className="Display__Span Display__Span--D"></span></div>
          <div className="Display__Segment--E"><span className="Display__Span Display__Span--E"></span></div>
          <div className="Display__Segment--F"><span className="Display__Span Display__Span--F"></span></div>
          <div className="Display__Segment--G"><span className="Display__Span Display__Span--G"></span></div>
        </div>
      </div>

      <div className='Display__Footer'>
        
      </div>
    </div>
  )
}

export default MainDisplay;
import React from 'react'
import './Floting.css';

const FlotingDiv = ({image ,txt1 ,txt2}) => {
  return (
    <div>
      <div className="flotingdiv"></div>
        <img src={image} alt="" />
        <span>
            {txt1}
            <br/>
           {txt2}
        </span>
    </div>
  )
}

export default FlotingDiv

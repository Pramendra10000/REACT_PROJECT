import React from 'react'
import './FlotingDiv.css'

const FlotingDiv = ({image ,txt1 ,txt2}) => {
  return (
    <div>
      <div className="floatingcontent">
        <img src={image} alt="" />
        <span>
            {txt1}
            <br/>
           {txt2}
        </span>
    </div>
    </div>
  )
}

export default FlotingDiv

import React from 'react'
import Button from './Button'

const Info = () => {
  return (
    <div className='info--container'>
      <div className="info--image" />
      <div className='info--data'>

        <h1 className='info--title'>Huzaifa Khan</h1>
        <h3 className='info--status'>Fullstack Developer</h3>
        <p className='info--website'>Protfolio.website</p>

        <div className="btn--container">
          <Button text={'Email'} customStyle={{ backgroundColor: '#FFFFFF', color: "#374151" }} />
          <Button text={'LinkedIn'} customStyle={{ backgroundColor: '#5093E2', color: "#FFFFFF" }} />
        </div>
      </div>
    </div>
  )
}

export default Info
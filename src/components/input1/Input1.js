import React from 'react'
import "./Input1.css"

const Input1 = () => {
  return (
    <div className='input'>
      <div className='input1'>
        <div className='input-text'>
            <h1>Join the club and get the benefits</h1>
            <h5>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</h5>
        </div>
        <div className='input-int'>
            <input className='email' type="email" placeholder="Enter your email" />
            <input className='btn1' type='submit' value={"Sign up"} />
        </div>
      </div>
    </div>
  )
}

export default Input1

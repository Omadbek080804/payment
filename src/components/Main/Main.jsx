import React from 'react'
import Products from '../products/Products'
import './Main.css'
import Payment from '../payment/Payment'

function Main() {
  return (
    <div className='main'>
      <div className="products">

      <Products />
      </div>
      <Payment/>
    </div>
  )
}

export default Main

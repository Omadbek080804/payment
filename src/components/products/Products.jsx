import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import './Products.css'
import { StateContext } from '../../App'





function Products() {

  const { data,setData, reset, setReset, totalPrice, handleDelete } = useContext(StateContext)






//  data.map(item=>item.id==id)
const handleQuantityChange = (id, newQuantity) => {
  if(newQuantity<0){
    console.log('minimal summa')
  }
  else{

  
  setData(prev =>
    prev.map(item =>
      item.id === id ? { ...item, soni: newQuantity } : item
    )
  );
}
};


  return (
    <div className='product-box'>
      <h1>Mahsulotlaringiz</h1>
      <div className='product-box-conteiner'>

        {data.length > 0 ? data.map((item) => (

          <div className="product-box-card" key={item.id}>
            <div className='product-box-card-left'>

              <img className='img' src={item.img} alt="" />

              <div className='productBox-Price'>
                <h2>{item.name}</h2>
                <h3 className='price'>{item.price} <p style={{ color: 'red', display: 'inline' }}> sum</p></h3>

              </div>
            </div>

<div className="total">
<button onClick={()=>handleQuantityChange(item.id, item.soni-1)}>- </button>
<h1>{item.soni}</h1>
<button onClick={()=>handleQuantityChange(item.id, item.soni+1)}>+ </button>

</div>

            <button onClick={() => handleDelete(item.id)} className='delete-btn-product'>
              Delete

            </button>

          </div>
        ))
          :
          <button className='reset-btn-product' onClick={() => setReset(reset + 1)}>sizning korzinangiz bosh uni qayta toldirish uchun bosing</button>
        }

      </div>
      <h1>Jami qiymat {totalPrice}</h1>
    </div>

  )
}

export default Products

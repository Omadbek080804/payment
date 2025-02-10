import React, { useContext, useState } from 'react'
import { StateContext } from '../../App'
import './Payme.css'
import { NavLink } from 'react-router-dom'

function Payme() {

  const {alert,setAlert,totalPrice ,codee}=useContext(StateContext)
  const [inpVal,setInpVal]=useState(null)

const handleSubmit=(e)=>{
  e.preventDefault()
if(totalPrice>0  && inpVal.length == 13){
  setAlert(true)
}
else{
  setAlert(false)
}
}
  return (
    <div className='payme'>
      <h1>Payme</h1>





<form action="" onSubmit={handleSubmit} className='form-submit'>

      <input
            className='inputt'
            placeholder='+998901234567'
            type="numberic"
            maxLength={13} 
            onChange={(e)=>setInpVal(e.target.value)}
            required
          />


<button className='unired-btn' >Tolovni tasdiqlash</button>

</form>




<div className={alert ?'alert':'offalert'}>

  <button onClick={()=>setAlert(false)} className='closealert'>X</button>
<h1>
PayMe Mobile

</h1>

<NavLink to={'/payme'}>sizning hisob raqamingizdan tolov yechib olish harakatini amalga oshirish uchun silkamizdan oting ...</NavLink>
</div>




    </div>
  )
}

export default Payme

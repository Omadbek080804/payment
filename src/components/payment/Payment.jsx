import React, {  useContext, useState } from 'react'
import './Payment.css'
import Payme from '../payme/Payme'
import Card from '../card/Card'
import { StateContext } from '../../App'

function Payment() {
    const [activate, setActivate] = useState(true);

    return (
        <div className='payment-conteiner'>
<h1>Tolov turi:</h1>


           <button
              onClick={() => setActivate(true)}
              className={activate ? "buttonn btn-1 activate " : "buttonn btn-1 "}
            >
            Payme orqali tolov
            </button>
            <button
              onClick={() => setActivate(false)}
              className={activate ? "buttonn btn-2 " : "buttonn btn-2 activate "}
            >
             Karta raqami orqali tolov
            </button>

            {
                activate ?
                    <Payme />
                    :
                    <Card />
                    
            }


        </div>
    )
}

export default Payment

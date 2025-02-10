import React, { useState, useContext } from 'react';
import { StateContext } from '../../App';



function CardSms() {

    const { alertsms, setAlertsms, codee } = useContext(StateContext)
    const [code, setCode] = useState(null)
    const { done, setDone } = useContext(StateContext)

    const handleSubmit = (e) => {
        e.preventDefault


        if (codee == code ) {
            console.log('true')
            setDone(true)
        }

        else {
            console.log('false')
        }
    }

    return (
        <div>













            <div className="login-card-sms">
                <form action="" className='login-sms-form' onSubmit={handleSubmit}>

                    <input
                        className='inputt'
                        type="text"
                        onChange={(e) => setCode(e.target.value)}
                        required
                    />

                    <button className='unired-btn' >
                        Tasdiqlash
                    </button>
                </form>




            </div>




















            <div className={alertsms ? 'alert' : 'offalert'}>

                <button onClick={() => setAlertsms(false)} className='closealert'>X</button>
                <h1>
                    PayMe Mobile

                </h1>

                <a>sizning sms raqamingiz  {codee}</a>
            </div>





        </div>
    )
}

export default CardSms

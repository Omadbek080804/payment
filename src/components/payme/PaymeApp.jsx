import React, { useState, useEffect, useContext } from 'react'
import './Payme.css'
import { IoBatteryFull } from "react-icons/io5";
import { BiSignal4 } from "react-icons/bi";
import { TiWiFi } from "react-icons/ti";
import { GoArrowLeft } from "react-icons/go";
import { StateContext } from '../../App';
import DonePage from './DonePage';

function PaymeApp() {

    const { totalPrice } = useContext(StateContext)
    const [done, setDone] = useState(false)
    const [time, setTime] = useState(getTime());

    function getTime() {
        return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTime());
        }, 60000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='payme-app'>
            <div className="payme-phone">

                <div className="soat">
                    <h1>{time}</h1>

                    <div className="camera"></div>

                    <div className='battary'>
                        <BiSignal4 />
                        <TiWiFi />
                        <IoBatteryFull />

                    </div>

                </div>



                {done ?

                    <DonePage />
                    :
                    <>
                        <div className="arrow-left">
                            <GoArrowLeft />
                            <h1>

                                Pul o`tkazmasi
                            </h1>
                        </div>

                        <div className="data-unired">

                            <img src="https://cdn-api.cloudgate.uz/bucket-1/img/fe49b63c8d334afc81f5111b6c6dc174.png" className='unired-img' alt="" />

                            <label style={{ color: 'black' }} htmlFor="">Company Name</label>
                            <input type="text" value={'Unired Mobile'} className='unired-inp' />
                            <label style={{ color: 'black' }} htmlFor="">Tolov summasi</label>
                            <input type="text" value={totalPrice} className='unired-inp' />


                        </div>



                        <button onClick={() => setDone(true)} className='unired-btn'>Oldinga</button>
                    </>
                }


            </div>
        </div>
    )
}

export default PaymeApp

import React, { useContext } from 'react'
import { MdDone } from "react-icons/md";
import './Payme.css'
import { StateContext } from '../../App';
import { CiStar } from "react-icons/ci";
import { TbReceipt } from "react-icons/tb";
import { GoArrowLeft } from "react-icons/go";
import { NavLink } from 'react-router-dom';


function DonePage() {
    const { totalPrice ,reset,setReset} = useContext(StateContext)



    return (
        <div className='done'>

            <div className="done-icon">
                <MdDone />
            </div>
            <h1>
                Tolov muvoffaqiyatli amalga oshirildi
            </h1>

            <h2>
                Maxsulot yoki xizmat o`z vaqtida olinmagan holda
                <br />
                xizmat ko`rsatuvchining qo`llab-quvvatlash xizmatiga
                <br />
                murojaat qiling
            </h2>


            <div className="payme-people">

                <h1>
                    Payme People
                </h1>

                <h1
                    style={{ color: ' rgb(97, 191, 160)' }}>
                    {totalPrice / 100}
                    ball
                </h1>

            </div>


            <div className="menu">

                <div className="menu-element">

                    <GoArrowLeft className='menu-icon' />

                    <NavLink to={'/'} onClick={()=>setReset(reset+1)} className='done-h1'>

                        Ilovaga <br /> qaytish

                    </NavLink >


                </div>

                <div className="menu-element">

                    <TbReceipt className='menu-icon' />

                    <h1>Chek</h1>

                </div>

                <div className="menu-element">

                    <CiStar className='menu-icon' />

                    <h1>Saqlash</h1>

                </div>

            </div>



        </div>
    )
}

export default DonePage

import React, { useContext, useState } from 'react'
import { StateContext } from '../../App';
import './Card.css'
import CardSms from './CardSms';
import DonePage from '../payme/DonePage';

function Card() {

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [isExpiryValid, setIsExpiryValid] = useState(null);
  const [cardType, setCardType] = useState('');
  const [checked, setChecked] = useState([])
  const { setAlertsms, alertsms, setCodee, done, totalPrice } = useContext(StateContext)
const [formatedNumbers,setFormattednumbers]=useState(null)


  const cardLogo = [
    {
      cardname: 'Humo',
      cardimg: 'https://humocard.uz/upload/medialibrary/208/8x0p9hi3h9jww0flwdm92dayhn0flulj/humo-logo-more.png'
    },
    {
      cardname: 'VISA',
      cardimg: 'https://w7.pngwing.com/pngs/648/10/png-transparent-visa-logo-credit-card-visa-debit-card-payment-card-mastercard-visa-blue-text-trademark.png'
    },
    {
      cardname: 'MasterCard',
      cardimg: 'https://banner2.cleanpng.com/20181128/gkr/kisspng-mastercard-logo-visa-credit-card-portable-network-mastercard-plus-datacenter-trkiyeampaposde-1713917426385.webp'
    },
    {
      cardname: 'UzCard',
      cardimg: 'https://api.uzcard.uz/wp-content/uploads/2024/07/Uzcard_Logo_-3.png'
    },
    {
      cardname: 'Maestro',
      cardimg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_sVvN5pPyIy7DfnCpB_AH28FpDocgdWWJEw&s'
    },
    {
      cardname: 'American Express',
      cardimg: 'https://static.vecteezy.com/system/resources/previews/000/064/443/non_2x/american-express-vector-logo.jpg'
    },

  ]

  const getCardType = (cardNumber) => {
    const cleanedNumber = cardNumber.replace(/\s+/g, '').replace(/[^0-9]/g, '');

    const cardPatterns = [
      { type: "VISA", pattern: /^4/ }, // VISA kartalari 4 bilan boshlanadi
      { type: "MasterCard", pattern: /^5[1-5]/ }, // MasterCard 51-55 oralig‘ida bo‘ladi
      { type: "UzCard", pattern: /^8600|^5614/ }, // UzCard kartalari 8600 bilan boshlanadi
      { type: "Humo", pattern: /^9860/ }, // Humo kartalari 9860 bilan boshlanadi

      { type: "American Express", pattern: /^3[47]/ }, // American Express 34 yoki 37 bilan boshlanadi
    ];

    for (let card of cardPatterns) {
      if (card.pattern.test(cleanedNumber)) {
        return card.type;
      }
    }

    return "Noma'lum karta turi";
  };

  const isValidCardNumber = (cardNumber) => {
    cardNumber = cardNumber.replace(/\s+/g, '').replace(/[^0-9]/g, '');
    if (cardNumber.length < 13 || cardNumber.length > 19) return false;

    let sum = 0;
    let shouldDouble = false;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i));
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  };

  const isValidExpiryDate = (expiryDate) => {
    const currentDate = new Date();
    const [month, year] = expiryDate.split('/').map((item) => item.trim());

    if (!month || !year || month < 1 || month > 12) return false;

    const currentYear = currentDate.getFullYear().toString().slice(-2);
    if (parseInt(year) < parseInt(currentYear)) return false;

    if (parseInt(year) === parseInt(currentYear) && parseInt(month) < currentDate.getMonth() + 1) {
      return false;
    }

    return true;
  };


  const handleCardNumberChange = (e) => {

    
    const value = e.target.value;
 
    const formattedNumbers = value
  
      .replace(/(.{4})/g, "$1 ")
      .trim();

      setFormattednumbers(formattedNumbers)
  

    setCardNumber(value);
    
    const valid = isValidCardNumber(value);
    setIsValid(valid);
    
    
    
    let filtercardtype = cardType
    ? cardLogo.filter(item => item.cardname === cardType)
    : '';

    setCardType(getCardType(value));

    setChecked(filtercardtype)




  };

  const handleExpiryDateChange = (e) => {
    const value = e.target.value;
    setExpiryDate(value);


    const validExpiry = isValidExpiryDate(value);
    setIsExpiryValid(validExpiry);
  };

  const generateCode = () => {
    const randomCode = Math.floor(100000 + Math.random() * 900000);
    setCodee(randomCode);
  };
  const smsHandler = () => {
    if (isExpiryValid && isValid && totalPrice > 0) {

      generateCode()
      setAlertsms(true)
    }
    else {
      console.log('errr')
    }
  }
  console.log(cardNumber)
  console.log(expiryDate)


  
  return (

    <div className='card-body'>

      {done ?

        <DonePage />
        :
        <>
          <div className='cards'>

            <form  className='form-inp'>
              <div className="card-check">







                {/* ---------------------------------karta raqami uchun input -------------------------- */}
                <div >

                  <div >

                    <label className='lebel-inp'>Karta raqami:</label>
                    <input className='inputt card-conteiner'
                      type="text"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      placeholder="Karta raqamini kiriting"
                      maxLength={16}
                    />
             
                  </div>



                  {/* ---------------------------karta-raqam true false------------------------------ */}
                  <div >
                    {isValid === null ? (
                      <p> karta raqam kiriting</p>
                    ) : isValid ? (
                      <p style={{ color: 'green' }}>Karta raqami to'g'ri</p>
                    ) : (
                      <p style={{ color: 'red' }}>Karta raqami noto'g'ri</p>
                    )}
                  </div>

                  {/* amal qilish muddati------------------------------------------------------- */}
                </div>
                <div className='card-mmm'>
                  {/* <label  className='lebel-inp'>MM/YY</label> */}

                  <input className='inputtt'
                    type="text"
                    value={expiryDate}
                    onChange={handleExpiryDateChange}
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                  <div>
                    {isExpiryValid === null ? (
                      <p>expire data kiriting</p>
                    ) : isExpiryValid ? (
                      <p style={{ color: 'green' }}>Amal qilish muddati to'g'ri</p>
                    ) : (
                      <p style={{ color: 'red' }}>Amal qilish muddati noto'g'ri</p>
                    )}
                  </div>
                </div>
                {/* --------------------------------------------------------------------------- */}

              </div>


            </form>



            <div className="card-form">
              <div className="card-check">







                {/* ---------------------------------karta raqami uchun input -------------------------- */}
                <div className=''>

                  <div className='card-number'>

                    {/* <label>Karta raqami:</label> */}
                    <h1 className='card-number'>{formatedNumbers ? formatedNumbers: 'XXXX XXXX XXXX XXXX'}</h1>
                    {checked && checked.map(item => (
                      <img className='card-logo' key={item.cardname} src={item.cardimg} alt="" />
                    ))}
                  </div>



                  {/* ---------------------------karta-raqam true false------------------------------ */}
                  <div >
                  </div>

                  {/* amal qilish muddati------------------------------------------------------- */}
                </div>
                <div className='card-mm'>
                  <label className='label-inp'>expire data</label>

                  <h1 className='expire-data'>{expiryDate ? expiryDate : 'xx/xx'}</h1>
                  <div>
                  </div>
                </div>
                {/* --------------------------------------------------------------------------- */}

              </div>

            </div>
          </div>


          <button onClick={smsHandler} className="unired-btn">Sms kodni olish</button>
          {alertsms ?


            <CardSms />
            :
            ''
          }
        </>
      }
    </div>
  )
}

export default Card

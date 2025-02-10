import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main/Main'
import Navbar from './components/navbar/Navbar'
import PaymeApp from './components/payme/PaymeApp'

export const StateContext = createContext()

function App() {
  const API = 'https://66216adb27fcd16fa6c6e4c6.mockapi.io/items'

  const [data, setData] = useState([])
  const [reset, setReset] = useState(1)
  const [alertsms, setAlertsms] = useState(false)
  const [alert, setAlert] = useState(false)
  const [codee, setCodee] = useState(121121);
  const [done, setDone] = useState(false);


  const getData = () => {
    axios.get(API)
      .then(res => setData(res.data))
  }
  useEffect(() => {

    getData()
  
  }, [reset])




  const handleDelete = (id) => {
    const filtered = data.filter(item => item.id !== id)
    setData(filtered)
  }

  // const totalPrice = data.reduce((sum, product) => sum + product.price, 0)
  const totalPrice = data.reduce((sum, item) => sum + item.price * item.soni, 0);

  

  









  return (
    <StateContext.Provider value={{ reset, setReset, data, setData, totalPrice, handleDelete, alert, setAlert, alertsms, setAlertsms, codee, setCodee ,done,setDone}}>

      <div className='app'>
        <Navbar />
        <Routes  >
          <Route path='/' element={<Main />} />
          <Route path='/payme' element={<PaymeApp />} />
        </Routes>


      </div>
    </StateContext.Provider>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BgChanger from './BgChanger.jsx'
import PasswordGenerator from './passwordGenerator.jsx'
import Inputbox from './components/Inputbox.jsx'
import CurrencyConverter from './currencyConverter.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <CurrencyConverter/>
  </React.StrictMode>,
)



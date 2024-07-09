import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './Counter.jsx'
import './index.css'
import BgChanger from './BgChanger.jsx'
import PasswordGenerator from './passwordGenerator.jsx'
import Inputbox from './components/Inputbox.jsx'
import CurrencyConverter from './currencyConverter.jsx'
import ExcuseMaker from './excuseMaker.jsx'
import Form from './ReactForm.jsx'
import { BrowserRouter as Router, Route, Routes,createBrowserRouter,createRoutesFromElements,RouterProvider, } from 'react-router-dom';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import ExcuseMaker2 from './ExcuseMaker2.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Header />
    <main className="flex-grow container mx-auto px-4 py-6 ">
   <Routes>
    <Route path="/" element={<Counter/>} />
    <Route path="/bg" element={<BgChanger/>} />
    <Route path="/password" element={<PasswordGenerator/>} />
    <Route path="/input" element={<Inputbox/>} />
    <Route path="/currency" element={<CurrencyConverter/>} />
    <Route path="/excuse" element={<ExcuseMaker/>} />
    <Route path="/form" element={<Form/>} />
    <Route path="*" element={<h1>Error : 404 Not Found</h1>} />
   </Routes>
    </main>
    <Footer />
  </Router>  
 )

//Alternate way to render the above code

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<MainLayout/>}>
//       <Route path='/' element={<Counter/>} />
//       <Route path='/bg' element={<BgChanger/>} />
//       <Route path='/password' element={<PasswordGenerator/>} />
//       <Route path='/input' element={<Inputbox/>} />
//       <Route path='/currency' element={<CurrencyConverter/>} />
//       <Route path='/excuse' element={<ExcuseMaker/>} />
//       <Route path='/form' element={<Form/>} />
//       <Route path='*' element={<h1>Error : 404 Not Found</h1>} />
//     </Route>
//   )
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//  <ExcuseMaker2/>
    
//   )




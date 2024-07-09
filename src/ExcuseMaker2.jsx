import React from 'react'
import { useState,useEffect } from 'react'

const ExcuseMaker2 = () => {
   const [type, setType] = useState('')
   const [excuse, setExcuse] = useState('')
  

    useEffect(() => {
        if(!type) return
        
        fetch(`https://excuser-three.vercel.app/v1/excuse/${type}/`)
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw new Error('Error')   
        })
        .then(data => {
            setExcuse(data[0])
        })
        .catch(err => console.log(err))
    }, [type])


   const generateExcuse= (e)=>{
    
    setType(e.target.textContent.toLowerCase())
   }



  return (
    <>
    <div className='flex flex-wrap m-0 p-0 justify-center font-sans '>
 <h1>Generate an Excuse </h1>
</div>
<div className='container'>
    <div className='flex flex-wrap justify-center gap-4'>

        <button className='bg-red-400 px-3 py-2 rounded-lg text-white font-semibold'
        onClick={generateExcuse}
        >Family</button>
        <button className='bg-green-400 px-3 py-2 rounded-lg text-white font-semibold'
        onClick={generateExcuse}
        >Office</button>
        <button className='bg-blue-400 px-3 py-2 rounded-lg text-white font-semibold'
        onClick={generateExcuse}
        >Children</button>
        <button className='bg-yellow-400 px-3 py-2 rounded-lg text-white font-semibol'
        onClick={generateExcuse}
        >Developers</button>
    </div>
    <h1>
      {excuse &&  `Your Excuse for the ${excuse.category} is : ${excuse.excuse} ` }
    </h1>
</div>
    </>
  )
}

export default ExcuseMaker2
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'


const excuseMaker = () => {
const [excuseObj,setExcuseObj] = useState('')



const generateExcuse =async (e) => {
    const type = e.target.textContent.toLowerCase()
   const response =  await fetch(`https://excuser-three.vercel.app/v1/excuse/${type}/`)
    if(response.ok){
        const data = await response.json()
        setExcuseObj(data[0])
        console.log(data[0])
    }
    else{
        console.log('Error')
    }
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
      {excuseObj &&  `Your Excuse for the ${excuseObj.category} is : ${excuseObj.excuse} ` }
    </h1>
</div>
</>
  )
}

export default excuseMaker
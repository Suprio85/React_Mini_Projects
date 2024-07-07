import React from 'react'
import { useState,useMemo,useEffect,useRef } from 'react'


const PasswordGenerator = () => {

 const [length, setLength] = useState(8);
 const [isSpecialChar, setIsSpecialChar] = useState(false);
 const [isNumber, setIsNumber] = useState(false);
 const [password, setPassword] = useState("");

 const passwordGenerator = useMemo(() => {
 let pass="";
 let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
 if(isNumber) characters += "0123456789";
 if(isSpecialChar) characters += "!@#$%^&*()_+~{}|[]:;'<>,.?/";

 for(let i=0; i<length; i++){
    pass += characters.charAt(Math.floor(Math.random() * characters.length));
    
}

setPassword(pass);

 }, [length, isSpecialChar, isNumber]);


    useEffect(() => {
        const trigger = async () => {
            await passwordGenerator;
        }
        trigger();
    },[]);

    const inputRef = useRef(null);

    const copytoClipboard = () => {
        window.navigator.clipboard.writeText(password);
        inputRef.current.select();
        alert('password copied to clipboard');
    }







  return (

    <div className='w-full h-screen duration-150' style={{backgroundColor: "black"}}>
    
    <h1 className='text-4xl text-center text-white'> Mini Project </h1>
    <div className='w-full my-16 max-w-md mx-auto shadow-md rounded-xl px-4 py-3  text-gray-950 bg-slate-800'>
            <h1 className='text-2xl text-center text-slate-200'> password Generator</h1>
        <div className='flex  justify-center shadow-md  rounded overflow-hidden md-4' >
            <input type='text' value={password}
            placeholder='password'
            ref={inputRef}
            className='w-full p-3  shadow-md my-2 outline-none rounded-s-md'
            >
            </input>
            <button className='h-14 outline-none px-2 py-0.5 shrink-0 bg-indigo-500 text-white rounded'
            onClick={copytoClipboard}
            >
              Copy
            </button>
        </div>

        <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
        <input type='range'
        min={8}
        max={20}
        value={length}
        className='cursor-pointer'
        onChange={(e) => setLength(e.target.value)}
        > </input>
        <label className='text-l text-white'>length : {length} </label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input type='checkbox'
        className='cursor-pointer'
        checked={isNumber}
        onChange={()=> setIsNumber((prev)=> !prev)}
        > </input>
        <label className='text-l text-white'>Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input type='checkbox'
        className='cursor-pointer'
        checked={isSpecialChar}
        onChange={()=> setIsSpecialChar((prev)=> !prev)}
        > </input>
        <label className='text-l text-white'>Special Char</label>
        </div>

        </div>
     


    </div>

    

    </div>
  )
}

export default PasswordGenerator
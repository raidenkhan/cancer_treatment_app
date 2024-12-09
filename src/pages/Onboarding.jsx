import React, { useState } from "react";
import { useStateContext } from "../Context/Index";
import { usePrivy } from "@privy-io/react-auth";
import { useNavigate } from "react-router-dom";
const onBoarding=()=>{
    const [username, setusername] = useState("")
    const [age, setage] = useState("")
    const [location, setlocation] = useState("")
    const {createUser}=useStateContext()
    const {user}=usePrivy()
    const navigate=useNavigate()
    const handleOnBoarding=async(e)=>{
        console.log(user)
        e.preventDefault()
        console.log(username,age,location )
        const userData={
            username,
            age:parseInt(age,10),
            location,
            createdBy:user.email.address
        }
        const newUser=await createUser(userData)
        if(newUser){
                navigate('/profile')
                
        }

    }
    return <div className="flex min-h-screen items-center justify-center bg-[#13131a]"> 
    <div className="w-full max-w-md rounded-xl p-8 shadow-lg bg-[#1c1c24]">
        <h2 className="mb-2 text-center text-5xl font-bold">👋</h2>
        <h2 className="mb-6 text-center text-2xl font-bold text-white">Welcome!, Let's get started</h2>
        <form onSubmit={handleOnBoarding}>
            <div className="mb-4 ">
                <label htmlFor="username" className="mb-2 block text-sm text-gray-300">Username</label>
                <input type="text" name="" id="username"  value={username} onChange={e=>setusername(e.target.value)} required
                className="w-full rounded-lg bg-neutral-900 px-4 py-3 text-neutral-400 focus:outline-none"/>
            </div>
            <div className="mb-4 ">
                <label htmlFor="age" className="mb-2 block text-sm text-gray-300">Age</label>
                <input type="number" name="" id="age"  value={age} onChange={e=>setage(e.target.value)} required
                className="w-full rounded-lg bg-neutral-900 px-4 py-3 text-neutral-400 focus:outline-none"/>
            </div>
            <div className="mb-4 ">
                <label htmlFor="location" className="mb-2 block text-sm text-gray-300">Location</label>
                <input type="text" name="" id="location"  value={location} onChange={e=>setlocation(e.target.value)} required
                className="w-full rounded-lg bg-neutral-900 px-4 py-3 text-neutral-400 focus:outline-none"/>
            </div>
            <button type="submit" className="mt-4 w-full rounded-lg text-white bg-green-600 py-3 font-semibold hover:bg-green-700 focus:outline-none 
            focus:ring-2 focus:ring-blue-600">Get Started</button>
        </form>

    </div>

    </div>

}
export default onBoarding;
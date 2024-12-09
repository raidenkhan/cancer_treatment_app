import React, { useEffect, useState } from 'react'
import { Route,Routes,useNavigate } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MedicalRecords from './pages/records/index'
import Home from './pages/Home';
import { OnBoarding } from './pages';
import { useStateContext } from './Context/Index';
import { usePrivy } from '@privy-io/react-auth';
import Profile from './pages/Profile';
import SingleRecordDetails from './pages/records/components/single-record-details';
import ScreeningSchedule from './pages/ScreeningSchedules';
const App=()=>{
    const {currentUser} =useStateContext();
    const navigate=useNavigate()
    const {user,authenticated,ready,login}=usePrivy();
    useEffect(()=>{
        if(ready && !authenticated){
            login()
        }else if(user && !currentUser){
            navigate('/onboarding')
        }
    },[ready,currentUser])
    return (
        <div className='relative flex min-h-screen flex-row bg-[#13131a] p-4'>
            <div className='relative mr-10 hidden sm:flex'>
                
                <Sidebar/>
            </div>
            <div className='mx-auto max-w-[1280px] flex-1 max-sm:w-full sm:pr-5'>
            {/* Navbar */}
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/onboarding' element={<OnBoarding/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/medical-records' element={<MedicalRecords/>}/>
                <Route path='/medical-records/:id' element={<SingleRecordDetails/ >}/>
                <Route path='/screening-schedules' element={<ScreeningSchedule/>}/>
            </Routes>
            </div>
        </div>
    )
}
export default App;
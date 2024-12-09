import {  IconCircleDashedCheck, IconHourglassHigh, IconUserScan } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import MetricsCard from "./MetricsCard";
import { usePrivy } from "@privy-io/react-auth";
import { useStateContext } from "../Context/Index";
const DisplayInfo=()=>{
    const navigate=useNavigate()
    const {user}=usePrivy()

    const {fetchUserRecords,records,fetchUserByEmail}=useStateContext()
    const [metrics, setmetrics] = useState({
        totalFolder:0,
        aiPersonalizedTreatment:0,
        totalScreenings:0,
        completedScreenings:0,
        pendingScreenings:0,
        overdueScreenings:0
    })
    useEffect(()=>{
        if(user){
            fetchUserByEmail(user.email.address).then(()=>{
                const totalFolder=records.length
                let aiPersonalizedTreatment=0;
             
                let totalScreenings=0;
                let completedScreenings=0;
                let pendingScreenings=0
                let overdueScreenings=0
                records.forEach(record => {
                    if(record.kanbanRecords){
                        try {
                            const kanban=JSON.parse(record.kanbanRecords);
                            aiPersonalizedTreatment+=kanban.columns.some(column=>column.title==='AI Personalized Treatment')?1:0
                            totalScreenings+=kanban.tasks.length;
                            console.log(kanban)
                            completedScreenings+=kanban.tasks.filter((task)=>task.columnId==='done').length
                            pendingScreenings+=kanban.tasks.filter((task)=>task.columnId==='doing').length
                            overdueScreenings+=kanban.tasks.filter((task)=>task.columnId==='overdue').length

                            
                        } catch (error) {
                            console.error('Failded to parse',error)
                        }
                        
                    }
                    setmetrics({totalFolder,aiPersonalizedTreatment,totalScreenings,completedScreenings,pendingScreenings,overdueScreenings})
                });

            })

        }

    },[user,fetchUserRecords,records])
    const metricsData=[
        {
            title:'Specialist Appointment Pending',
            subtitle:'View',
            value:metrics.pendingScreenings,
            icon:IconHourglassHigh,
            onclick:()=>navigate('/appointments/pending')
        },
        {
            title:'Treatment Progress Update',
            subtitle:'View',
            value:`${metrics.completedScreenings} of ${metrics.totalScreenings}`,
            icon:IconCircleDashedCheck,
            onclick:()=>navigate('/appointments/progress')
        },
        {
            title:'Total Folders',
            subtitle:'View',
            value:metrics.totalFolder,
            icon:IconCircleDashedCheck,
            onclick:()=>navigate('/folders')
        },
        {
            title:'Total Screenings',
            subtitle:'View',
            value:metrics.totalScreenings,
            icon:IconUserScan,
            onclick:()=>navigate('/screenings')
        },
        {
            title:'Completed  Screenings',
            subtitle:'View',
            value:metrics.totalScreenings,
            icon:IconUserScan,
            onclick:()=>navigate('/screenings/completed')
        },
        {
            title:'Pending  Screenings',
            subtitle:'View',
            value:metrics.pendingScreenings,
            icon:IconUserScan,
            onclick:()=>navigate('/screenings/pending')
        },
        {
            title:'Overdue  Screenings',
            subtitle:'View',
            value:metrics.overdueScreenings,
            icon:IconUserScan,
            onclick:()=>navigate('/screenings/overdue')
        },

    ]
    return (
        <div className="flex flex-wrap gap-[26px]">
            <div className="mt-7 grid w-full gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
             
            {metricsData.slice(0,2).map((metric)=>(<MetricsCard key={metric.title} {...metric}/>))}
            </div>
            <div className="mt-[9px] grid w-full gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
            >
                {metricsData.slice(2).map((metric)=>(
                    <MetricsCard key={metric.title} {...metric}/>
                ))}
            </div>

        </div>
    )
}
export default DisplayInfo;
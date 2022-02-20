import React, { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom';
import Task from './task.js';
function RenderTask() {
    const {id}=useParams();
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const getData=async()=>{
            setLoading(true);
            const response=await fetch(` https://ap-south-1.aws.data.mongodb-api.com/app/application-0-pmrso/endpoint/assessment?id=${id}`);
            const data=await response.json();
            console.log(data);
            setLoading(false);
        }
        getData();        
    },[])
  return (
    <>
    {
        loading?
        <div>Loading</div>
        :
        <Task/>
    }
    </>
  )
}

export default RenderTask
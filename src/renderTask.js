import React, { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom';
import CandidateFrom from './candidateFrom';
function RenderTask() {
    const {id}=useParams();
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);
    const [data,setData]=useState(null);
    useEffect(()=>{
        const getData=async()=>{
            setLoading(true);
            const response=await fetch(`https://ap-south-1.aws.data.mongodb-api.com/app/application-0-pmrso/endpoint/assessment?id=${id}`);
            if(response.ok){
            const data=await response.json();
            setData(data);
            }
            else{
                setError(true);
            }
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
            error?<h1>Task Id invalid</h1>:<CandidateFrom task={data[0]["tasks"]}/>  
    }
    </>
  )
}

export default RenderTask
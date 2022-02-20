import React from 'react'
import Task from './task.js';
function CandidateFrom(props) {
    const [name,setName]=React.useState();
    const [state,setState]=React.useState(true);
    const [id,setId]=React.useState();
  return (
    <div>
        {state?
       <><h1>Candidate Form</h1> 
       <h3>Enter your name</h3>:<input
       onChange={
              (e)=>{
                    setName(e.target.value);
                }
       } type="text"/><br/>
       <button onClick={async()=>{
           await fetch(`https://ap-south-1.aws.data.mongodb-api.com/app/application-0-pmrso/endpoint/candidate`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    name:name,
                    taskId:props.task.id
                }).then(res=>res.json())
                .then(data=>{
                    setId(data["$oid"]);
                    setState(false);
                })
            })
       }
           
         }>Submit</button>
       </>:
         <Task task={props.task} candidateId={id}/>}

    </div>
  )
}

export default CandidateFrom;
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-python';
import "ace-builds/src-noconflict/mode-javascript"; 
import 'ace-builds/src-noconflict/theme-solarized_dark'
import "ace-builds/src-noconflict/ext-language_tools";
import React,{useState} from 'react';
function Task(props) {
  const task=props.task;
  const [response,setResponse]=useState(null);
  const [state,setState]=useState(0);
    return (
    <div className="task">
      <h1>{task["description"]}</h1>
       <AceEditor
            value={props.code}
            mode={task["language"]}
            width="100%"
            theme="solarized_dark"
            onChange={(e)=>props.setCode(e)}
            fontSize="20px"
            showGutter={true}
            highlightActiveLine={true}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2
            }} 
            />
          <div
          class="test"
          style={
            {
              fontSize: "20px",
              padding: "10px",
            }
          }

          >

          </div>
          {state==0?
          <button
          onClick={()=>{
            console.log({"src":props.code,"candidateId":props.candidateId,"questionId":task.id});
          }}
          >Get Response</button>:""
        }
    </div>
  );
}

export default Task;

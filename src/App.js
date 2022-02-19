import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-solarized_dark'
import "ace-builds/src-noconflict/ext-language_tools";
import React,{useState} from 'react';
function App() {
  const task=require('./task.json');
  const [code,setCode]=useState(task["place_holder"]);
  const [testCode,setTestCase]=useState("");
    return (
    <div className="App">
      <h1>{task["task"]}</h1>
       <AceEditor
            value={code}
            mode={task["lang"]}
            width="100%"
            theme="solarized_dark"
            onChange={(e)=>setCode(e)}
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
            <h3>Test Code</h3>
            <textarea  cols="40" rows="5"
              
              onChange={
                (e)=>setTestCase(e.target.value)
              }
            />

          </div>
          <button
          onClick={()=>{
            console.log({"testCode":testCode,"code":code});
          }}
          >Get Response</button>
    </div>
  );
}

export default App;

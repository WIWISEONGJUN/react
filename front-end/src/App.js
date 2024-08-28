import './App.css';
import {useState} from "react";
import './testFolder/test.css'
import {Ellipsis} from "./testFolder/Ellipsis.tsx";
function App() {
  const [mapData] = useState([
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "ccccccccccccccccccccccccccccccccccccccccccccc",
    "ddddddddddddddddddddddddddddddddddddddddddddd",
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    "fffffffffffffffffffffffffffffffffffffffffffff",
    "ggggggggggggggggggggggggggggggggggggggggggggg",
    "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
  ])
  return (
    <div className="App">
      <div style={{width:"50px"}}>
        {
          mapData.map((data,index)=>
              <Ellipsis className={"test" + index.toString()} key={data+index.toString()}>{data}</Ellipsis>
          )
        }
        {
          mapData.map((data,index)=>
              <Ellipsis key={data+index.toString()}><p className={"test" + index.toString()}>{data}</p></Ellipsis>
          )
        }
        {
          mapData.map((data,index) =>
              <Ellipsis key={data+"_"+index.toString()}>
                <div>
                  <p>
                    {data}
                  </p>
                </div>
              </Ellipsis>
          )
        }
      </div>
    </div>
  );
}

export default App;

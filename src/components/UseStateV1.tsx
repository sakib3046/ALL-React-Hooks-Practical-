import React,{useState} from 'react'

const UseStateV1 = () => {
    // function initRunFunc(){
    //     console.log("Use State Hooks Run");
    //     return 0;
    // }
    // const [count,setCount]=useState(()=>initRunFunc()); //A function call another for not repeating initRunFunc again and again when button will be clicked.
    
    const [count,setCount]=useState(0);
    function inc() {
        setCount(prevCount => prevCount+1)
    }
    function dec() {
        setCount(prevCount => prevCount-1)
    }
  return (
    <main>
            <h2>Use State Hook V1 General and function pass</h2>
        <div className="">
            <button type="button" onClick={inc}>+1</button>
            <span style={{margin:20}}>{count}</span>
            <button type="button" onClick={dec}>-1</button>
        </div>
    </main>
  )
}

export default UseStateV1
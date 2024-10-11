import React,{useState} from 'react'

const UseStateV2 = () => {
    const [state,setState]=useState({count:0, theme:"red"});
const count= state.count;
const theme= state.theme;

    function inc() {
       setState(prevState=>{
        return { ...prevState,count: prevState.count+1}
       })
    }
    function dec() {
        setState(prevState=>{
            return { ...prevState,count: prevState.count-1 }
           })
    }
  return (
    <main>
            <h2>Use State Hook V2 JSON Pass</h2>
        <div className="">
            <button type="button" onClick={inc}>+1</button>
            <span style={{margin:20}}>{count}</span>
            <span style={{margin:20}}>{theme}</span>
            <button type="button" onClick={dec}>-1</button>
        </div>
    </main>
  )
}

export default UseStateV2
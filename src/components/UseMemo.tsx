import React, { useState,useMemo, useEffect } from 'react'

const UseMemo = () => {
    const [count, setCount] =useState();
    const [theme, setTheme]=useState(false);
    const delayCount=useMemo(()=>{
      return slowFunction(count)
    },[count])
    const changeTheeme= useMemo(()=> {
      return {
          backgroundColor: theme ? 'red':'blue',
           padding:20, 
           fontSize:50,
           margin:10
      }
    },[theme])
    useEffect(()=>{
      console.log("Theme Changed");
      
    },[changeTheeme])


  return (
    <div>
        <h2>Use Memo</h2>
        <input type="number" name="" value={count} onChange={e=>{setCount(parseInt(e.target.value))}} id="" style={{height:35}}/>
        <button type="button" onClick={()=>{setTheme(prvThene=>!prvThene)}}> Change Theme</button>
        <p>Preview</p>
        <span style={changeTheeme}>{delayCount}</span>
    </div>
  )
}
function slowFunction(num) {
    console.log("Slow Function Start");
    for (let index = 0; index < 1000000000; index++) {}
    console.log("Slow Function End");
    return num
    
}

export default UseMemo
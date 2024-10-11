import React, { useEffect, useState } from 'react'

const UseEffectV1 = () => {
    const [resourceType, setResourceType]=useState("posts");
    const [items,setItems]=useState([])
    useEffect(()=>{
        console.log("onMount");
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))

        return ()=>{
            console.log("useEffect Return Call");  
        }
    },[resourceType])

  return (
    <div>
        <h2> Use Effect V1 Fetching Data </h2>
        <div className="">
        <button onClick={()=>{setResourceType("posts")}}>Post</button>
        <button onClick={()=>{setResourceType("users")}}>Users</button>
        <button onClick={()=>{setResourceType("comments")}}>Comments</button>
        </div>
        <h3>{resourceType}</h3>
        {items.map(item=>{
            return <pre>{JSON.stringify(item)}</pre>
        })}
    </div>
  )
}

export default UseEffectV1
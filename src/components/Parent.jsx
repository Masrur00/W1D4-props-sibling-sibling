import React, { useState } from "react";
import React from "react"
import { Child1 } from "./Child1";
import { Child2 } from "./Child2"


export const Parent = ()=> {
  const [value, setValue]  = useState("Hello inside Parent");

  // let value = 10;
  // const increament = (val)=>{
  //     alert('Hi from parent, your value : '+val)
  //     value = val;
  // }
  return (<>
  <h2>Inside Parent</h2>
   <Child1 setValue={setValue} />
   {/* <Child1 increament={increament} /> */}
   <Child2 value={value} />
  </>)
}
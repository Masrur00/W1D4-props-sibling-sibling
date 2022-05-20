import React from 'react';
export const Child1 = (props) => {
  return (
    <>
      <input
        onChange={(e) => props.setValue(e.target.value)}
        placeholder="insert value"
      />
      {/* <input onChange={(e)=>props.increament(e.target.value)} placeholder="insert value" />        */}
    </>
  );
};

import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
    
function data(){
     let name;
     let marks=0;
     let score;
     let total=Math.max(1,score);
}
  return (
    <div>
       <ComponentB name="Rita" data={data} object={{name:"Rita"}} number={6} bool={true} func={function say(){console.log("hello")}} symbol={Symbol("m")}></ComponentB>
    </div>
  )
}

export default ComponentA
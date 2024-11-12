import React from 'react';
import ReactDOM from 'react-dom/client';

// const header = React.createElement("h1",{id:"heading"},"namaste REact")
// const header = (
//                  <h1 id="heading">ypooooooooooo nAMASTE react</h1>
//                )
const Title = () =>{
                  return (
                      <div className='yo'>
                        <h1>Welcome to React</h1>
                      </div>
                  );
}

const Heading = () => (
  <div className='yoo'>
    <Title></Title>
    <h1>Welcome to Second Function</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Heading/>)
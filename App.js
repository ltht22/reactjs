// import { useState } from 'react'
// function App(){
//   const [color,setColor] = useState('White');

//   const changeColorBlack =()=> {setColor("Black")}
//   const changeColorWhite =()=> {setColor("White")}

//   return(
//     <div className='App' style={{padding:20}}>
//       <h1> {color}</h1>
//       <button onClick= {changeColorBlack}>ChangeColorBlack</button>
//       <button onClick= {changeColorWhite}>ChangeColorWhite</button>
//     </div>
//   )
// }

//  export default App

//  function App(){
//   const[counter,setCounter] = useState(0)

//   return (
//     <div className="App" style ={{padding:20}}>

//     <h1> {counter} </h1>
//     <button onClick={() =>setCounter(counter+1)}>Increase</button>
//     </div>
//   )
//  };

//  export default App

// function App(){

//   const [counter, setCounter] = useState(1)

//   const handleIncrease = () =>{
//     setCounter(counter+1)
//   }

//   return (

//     <div className="App" style ={{padding:20}}>
//       <h1>{counter}</h1>
//       <buttom onClick = {handleIncrease}>Increase</buttom>
//     </div>
//   );
// }
//  export default App

// import './App.css';
// import React from "react";
// import Header from './Component/Header';

import Nav from "./Component/Nav";

import ColorBox from "./Component/ColorBox";

import Color from "./Component/Test";

function App() {
  let list1 = [
    {
      color: "green",
      title: "123",
    },
    {
      color: "yellow",
      title: "456",
    },
    {
      color: "red",
      title: "789",
    },
  ];

  return (
    <div>
      {/* <Header></Header>
      <Nav/> */}
      <div>
        {/* <ColorBox color="green" title="th"></ColorBox>

        <ColorBox color="yellow" title=".."></ColorBox>
        <ColorBox color="red" title="123"></ColorBox> */}
        {list1.map((item, index) => {
          return <ColorBox color={item.color} title={item.title} />;
        })}

      </div>
    </div>
  );
}

export default App;

// function App() {

//   const name = "Thu";
//   const age = 18;
//   const isMale = true;
//   const student = {
//     name: 'Luu Thu',
//     age: 18
//   };

//   const colorList = ['red', 'green', 'yellow']

//   return (
//     <div className='App'>
//       <header className='App-header'>

//         <p>
//           Hello -{name}- {age}
//         </p>
//         <p>{isMale?"Male":"Female"}</p>
//       </header>
//     </div>
//   )

// import React from 'react';
// import ReactDOM from 'react-dom';

//  function App() {
// // Input field component
// const Input=()=>
// {
//     return(
//         <div>
//             <input type="text"  />
//             <br />
//             <br />
//         </div>
//     );
// }

// // Button Component
// const Button=()=>
// {
//     return <button type = "submit">Submit</button>;
// }

// // Form component
// const Form=()=>
// {
//     return (
//         <div>
//             <Input />
//             <Input />
//             <Button />
//         </div>
//     );
// }

// ReactDOM.render(
//     <Form />,
//     document.getElementById("root")
// );
//  }
// export default App;

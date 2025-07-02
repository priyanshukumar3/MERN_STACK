// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
//-----------------------------------------------------------------


// import "./App.css";
// import React from "react";

// // import { Greet, Greet1 } from "./components/Greet";
// import Greet from "./components/Greet";

// function App() {
//   const name = "Munit";
//   return (
//     <div className="App">
//       <Greet studentName={name} college={"Lpu"} branch={"CSE"} />
//     </div>
//   );
// }

// export default App;



// import "./App.css";
// import React from "react";
// import Timer from "./components/Timer";

// //import { Greet, Greet1 } from "./components/Greet.jsx";
// // import Conditional from "./components/conditional";
// function App() {
//   return (
//     <div className="App">
//       {/* <Greet />
//       <Greet1 /> */}
//       {/* <Counter />; */}
//       <Timer />
//       {/* <Conditional /> */}
//     </div>
//   );
// }

// export default App;





import "./App.css";
import React, { use, useState } from "react";

import Greet, { Greet1 } from "./components/Greet";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import Conditional from "./components/Conditional";
import Form from "./components/Form";
import Uncontrolled from "./components/Uncontrolled";
import List from "./components/List";
import Listner from "./components/Lifecycle/LIstner";
import ClassComponent from "./components/Lifecycle/classComponent";
import CounterWithHook from "./components/Lifecycle/CounterWithHook";


function App() {
  const [is, setIs] = useState(false);

  return (
    <div className="App">
      {/* <Greet studentName={"Munit"} college={"Lpu"} branch={"CSE"} /> */}
      {/* <Counter /> */}
      {/* <Timer /> */}

      {/* <Conditional handleParent={(state) => setIs(state)} />
      {is ? <h1>Hello LPU</h1> : <h3>Hello students</h3>} */}

      {/* <Form /> */}
      {/* <Uncontrolled /> */}

      {/* <List /> */}
      {/* <Timer /> */}

      {/* <classComponent /> */}
      {/* <Listner /> */}
      <CounterWithHook/>

    </div>
  );
}

export default App;


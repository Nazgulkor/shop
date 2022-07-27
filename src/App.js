import React from "react";
import Shop from "./components/Shop";
import Header from "./components/Header"
import {Routes, Route} from 'react-router-dom'
import Basket from "./components/Basket";
function App() {
  


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path='/basket' element={<Basket />}/>
      </Routes>
    </div>
  );
}

export default App;

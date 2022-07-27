import React, { useRef } from "react";
import Shop from "./components/Shop";
import Header from "./components/Header";
import { Routes, Route, HashRouter } from "react-router-dom";
import Basket from "./components/Basket";
function App() {
  let disclaimer = useRef();

  let disclaimerToggle = () => {
    disclaimer.current.classList.toggle('active')
  }
  return (
    <div className="App">
      <div className="disclaimer" ref={disclaimer}>
        Не обращайте внимание на внешний вид сайта. Целью не являлось
        покрасоваться умением лаконично и грамотно стилизовать(хоть я могу). А
        таргетом было запись, чтение, изменение и удаление данных.
        Взаимодействие с редаксом, использование всяких либов и тд. КОРОЧЕ
        ГОВОРЯ ПРОКАЧАТЬСЯ ИМЕННО В REACT.<br/>
        <button className="toggle_disclaimer"
        onClick={(e) => {
          disclaimerToggle()
          if(disclaimer.current.classList.contains('active')){
            e.target.textContent = 'СКРЫТЬ'
          }else {
            e.target.textContent = 'НАЖМИ'
          }
          }}>НАЖМИ</button>
      </div>
      <Header />
      <Routes>
        <Route exact path="/shop" element={<Shop />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;

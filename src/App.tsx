import { useState } from 'react';
import './calculator.css';

function App() {
  const [total, setTotal] = useState(0);

  return (
    <div id="app">
      <div className="calculator">
        <h1 id="total">{total}</h1>
        <div className="digits flex">
          {Array.from({ length: 9 }, (_, i) => i + 1).reverse().map((v:number) => <button key={v} type="button" className="digit">{v}</button>)}
        </div>
        <div className="modifiers subgrid">
          <button type="button" className="modifier">AC</button>
        </div>
        <div className="operations subgrid">
          <button type="button" className="operation">/</button>
          <button type="button" className="operation">X</button>
          <button type="button" className="operation">-</button>
          <button type="button" className="operation">+</button>
          <button type="button" className="operation">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;

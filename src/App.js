import React from 'react';
import HocCounter from './HocCounter';
import Counter from './Counter';


const CounterWithHOC = HocCounter(Counter, 2); 

const App = () => {
  return (
    <div>
      <h1>Counter Application with HOC</h1>
      <CounterWithHOC />
    </div>
  );
};

export default App;

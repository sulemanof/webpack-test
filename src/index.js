import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const a = 10;
  const b = 20;

  return (
    <h1>
      Hello from React world! Number:
      {a + b}
    </h1>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

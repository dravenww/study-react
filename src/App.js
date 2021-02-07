import * as React from 'react'
import './App.css';

function App() {
  const [count, setCount] = React.useState(['a', 'b', 'c', 'd']);
  const handler = React.useCallback(function () {
    setCount(['a', 'c', 'b', 'd', 'e'])
  })

  return (
      <section>
        <div onClick={handler}>
          handle
        </div>
        <ul>
          {count.map((item, index) => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      </section>
  );
}

export default App;



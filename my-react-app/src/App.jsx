import { useState } from 'react'
import Button from './components/button'
import List from './components/list'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const getChild = (e, data) => {
    console.log(e, data);
  }
  return (
    <>
      <h1>Vite + React</h1>
      <List getChild={(e, data) => getChild(e, data)} name={'haha'}></List>
      <Button child="click me" className="h-button"></Button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl text-red-700 font-bold underline">
         Hello world!
      </h1>
    </>
  )
}

export default App

import { useState } from 'react'
import Footer from './component/Footer'
import PostListing from './component/PostListing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PostListing />
      <Footer />
    </>
  )
}

export default App

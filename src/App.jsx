import { useState } from 'react'
import './App.css'
import { Stack } from "@mui/material"
import TextContent from './components/textContent/TextContent'

import Form from './components/form/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main">
      <TextContent/>
      <Form />
    </div>
  )
}

export default App

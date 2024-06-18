import { useState } from "react"
import Cards from "./Components/Cards"


function App() {
  const [state, setState] = useState(0)

  return (
    <>
      <div className="App">
        there
        <Cards />
      </div>
    </>
  )
}


export default App;

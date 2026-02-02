import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Hearder from "./components/Hearder"




function App() {

  return (
    <>
  <Hearder/>
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}

export default App

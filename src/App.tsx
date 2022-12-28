import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, Navigate } from "react-router-dom"

function App() {
  return( 
  <Routes>
    <Route path="*" element={<Navigate to="/" />} />
    <Route path="/" element={<h1>Home</h1>} />
    <Route path="about" element={<h1>About</h1>} />
  </Routes>

  )
}

export default App

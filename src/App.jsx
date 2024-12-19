import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Home";
import Movies from "./Movies";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

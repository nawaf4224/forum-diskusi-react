// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Registrasi from "./pages/registrasi/Registrasi";

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registrasi />}>
          {/* <Route path="/registrasi" element={<Registrasi />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

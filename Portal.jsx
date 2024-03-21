import {Routes, Route} from "react-router-dom"
import Homepage from "./Homepage"
import Pages from "./Pages"
import Features from "./Features"
import Document from "./Document"
import NavBar from "./NavBar"

function Portal() {
  return (
    <>
    <NavBar />
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/features" element={<Features />} />
        <Route path="/document" element={<Document />} />
    </Routes>
    </>
  )
}

export default Portal
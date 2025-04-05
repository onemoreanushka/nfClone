import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:slug" element={<Details />} />
      </Routes> {/*slug is unique identity for each item, in this case each movie */}
    </>
  )
}

export default App

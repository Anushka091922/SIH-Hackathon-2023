import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './pages/home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={ <Home/> } />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App

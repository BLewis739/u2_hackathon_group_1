import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import ViewPark from './pages/ViewPark'
import ViewRide from './components/Ridecard'
import CreateRide from './components/CreateRide'
import CreatePark from './components/CreatePark'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/park/details/:parkId" element={<ViewPark />} />
          <Route path="/view/rides/:rideId" element={<ViewRide />} />
          <Route path="/createride" element={<CreateRide />} />
          <Route path="/createpark" element={<CreatePark />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Header from "./Header"
import GameList from "./GameList"
import Home from './Home'
import GameDetails from './GameDetails'
import Login from './Login'

function App() {
  return (
    <>
      <Header />
      <main className="bg-background text-text min-h-screen p-4 sm:p-8 sm:px-12 md:px-24 lg:px-40 xl:px-52">
        <Routes>
          <Route path="/" element={<Home />} /> {/*visar Home.jsx som landningssida*/}
          <Route path="/games/:id" element={<GameDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favorites" element={<div>Favorites (coming soon)</div>} />
          <Route path="/cart" element={<div>Cart (coming soon)</div>} />
          <Route path="/orders" element={<div>Order history (coming soon)</div>} />
        </Routes>
      </main>
    </>
  )
}

export default App;

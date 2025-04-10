import { Routes, Route } from 'react-router-dom'
import Header from "./Header"
import GameList from "./GameList"
import Home from './Home'

function App() {
  return (
    <>
      <Header />
      <main className="bg-background text-text min-h-screen p-8">
        <Routes>
          <Route path="/" element={<Home />} /> {/*visar Home.jsx som landningssida*/}
          <Route path="/login" element={<div>Login page (coming soon)</div>} />
          <Route path="/favorites" element={<div>Favorites (coming soon)</div>} />
          <Route path="/cart" element={<div>Cart (coming soon)</div>} />
          <Route path="/orders" element={<div>Order history (coming soon)</div>} />
        </Routes>
      </main>
    </>
  )
}

export default App;

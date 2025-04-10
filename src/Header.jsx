import logo from './assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="flex items-center gap-4 p-4 border-b border-glow bg-background text-primary">
        {/* Logo */}
        <Link to="/">
            <img src={logo} alt="CtrlPlay Logo" className="h-24"/>
        </Link>

        {/* Sökfält */}
        <input
            type="text"
            placeholder="Search game..."
            className="px-3 py-1 rounded text-body"
        />

        {/* Navigation */}
        <nav className="flex gap-4 text-subtext">
            <Link to="/login">Login</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/orders">Order history</Link>
        </nav>
    </header>
  )
}

export default Header;
import logo from './assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="border-b border-glow bg-background text-primary">
        <div className='max-w-screen-xl mx-auto w-full flex items-center justify-between gap-4 px-4 sm:px-8 md:px-24 lg:px-40 xl:px-52'>
            {/* Logo */}
            <Link to="/" className='flex-shrink-0'>
                <img src={logo} alt="CtrlPlay Logo" className="h-24"/>
            </Link>

            {/* Sökfält */}
            <div className='flex-1 px-4'>
                <input
                    type="text"
                    placeholder="Search game..."
                    className="w-full px-3 py-2 rounded text-body border border-transparent focus:outline-none focus:ring-1 focus:ring-glow"
                />
            </div>

            {/* Navigation */}
            <nav className="flex gap-4 text-subtext flex-shrink-0">
                <Link to="/login">Login</Link>
                <Link to="/favorites">Favorites</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/orders">Order history</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header;
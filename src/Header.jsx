import logo from './assets/logo.png'

function Header() {
  return (
    <header className="flex items-center gap-4 p-4 border-b border-glow bg-background text-primary">
      <img src={logo} alt="CtrlPlay Logo" className="h-24"/>
    </header>
  )
}

export default Header
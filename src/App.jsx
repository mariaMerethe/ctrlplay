import Header from "./Header"
import GameList from "./GameList"

function App() {
  return (
    <>
      <Header />
      <div className="bg-background text-text min-h-screen p-8">
        <h1 className="text-4xl font-heading text-primary">
          Hello world!
        </h1>
        <p className="font-body text-subtext">
          Welcome to the ultimate gaming webshop!
        </p>
        <GameList />
      </div>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import { getGames } from './lib/igdb'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import FeaturedGame from './FeaturedGame'
import FeaturedGameSkeleton from './FeaturedGameSkeleton';

function Home() {
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getGames()
        .then(data => {
            setGames(data)
            setLoading(false)
        })
        .catch(err => {
            console.error(err)
            setLoading(false)
        })
    }, [])

    const featuredGame = games[0]
    const otherGames = games.slice(1)

    return (
        <section className="text-text">
        <h1 className="text-3xl font-bold mb-4">Welcome to CtrlPlay!</h1>

        {/* Featured Game */}
        {loading ? (
            <FeaturedGameSkeleton />
        ) : featuredGame && (
            <div className="mb-8 border border-glow p-4 rounded">
                <h2 className="text-2xl font-semibold mb-2">🔥 Featured Game</h2>
                <FeaturedGame game={featuredGame} />
            </div>
        )}

        {/* Other Games */}
        <h2 className="text-xl font-semibold mb-2">🎮 Popular Games</h2>
        {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {Array.from({ length: 10 }).map((_, i) => (
                    <GameCardSkeleton key={i} />
                ))}
            </div>
        ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherGames.map(game => (
                <GameCard key={game.id} game={game} />
            ))}
            </div>
        )}
        </section>
    )
}

export default Home;

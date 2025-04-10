import { useEffect, useState } from 'react';
import { getGames } from './lib/igdb';
import GameCard from './GameCard';

function GameList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true); //visar att spelen laddar

  useEffect(() => {
    async function fetchGames() {
        setLoading(true); //börja ladda
        try {
            const data = await getGames();
            setGames(data);
        } catch (error) {
            console.error("Error loading games:", error);
        } finally {
            setLoading(false); //klar, oavsett om det lyckades eller ej
        }
    }
    
    fetchGames();
  }, []);

  if (loading) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="bg-purple-700 animate-pulse rounded p-4 h-[340px] flex flex-col justify-between"
          >
            <div className="bg-purple-400 h-48 rounded mb-4" />
            <div className="h-4 bg-purple-400 rounded w-3/4 mb-2" />
            <div className="h-4 bg-purple-400 rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GameList;

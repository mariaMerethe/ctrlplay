import { useEffect, useState } from 'react';
import { getGames } from './lib/igdb';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

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
          <GameCardSkeleton key={i} />
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

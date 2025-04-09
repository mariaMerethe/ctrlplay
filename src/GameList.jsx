import { useEffect, useState } from 'react';
import { getGames } from './lib/igdb';
import GameCard from './GameCard';

function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames().then(setGames).catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GameList;

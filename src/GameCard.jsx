function GameCard({ game }) {
    return (
      <div className="bg-secondary p-4 rounded shadow-md text-white">
        {game.cover?.url && (
          <img
            src={game.cover.url.replace('t_thumb', 't_cover_big')}
            alt={game.name}
            className="w-full h-64 object-cover rounded"
          />
        )}
        <h2 className="font-heading text-lg mt-2">{game.name}</h2>
      </div>
    );
  }
  
  export default GameCard;
  
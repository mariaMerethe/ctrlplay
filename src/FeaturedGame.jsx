import { Link } from "react-router-dom";

function FeaturedGame({ game }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg bg-card">
      {/* Bild */}
      <img
        src={game.cover?.url.replace('t_thumb', 't_cover_big')}
        alt={game.name}
        className="w-full md:w-64 rounded shadow-lg object-cover"
      />

      {/* Text */}
      <div className="text-text flex-1">
        <h2 className="text-2xl font-bold mb-2">🔥 {game.name}</h2>
        <p className="mb-4 text-subtext">{game.summary?.slice(0, 200)}...</p>
        <Link
          to={`/games/${game.id}`}
          className="inline-block bg-primary text-background font-bold py-2 px-4 rounded hover:bg-accent transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default FeaturedGame;

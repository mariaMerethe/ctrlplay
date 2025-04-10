import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getGameById } from "./lib/igdb"

function GameDetails() {
    const { id } = useParams(); //fånga ID från URL
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);

    //slumpa ett pris mellan 100–500 kr, bara vid första renderingen
    const [price] = useState(() => Math.floor(Math.random() * 400 + 100));

    //kolla om spelet finns i favoriter (localStorage)
    const [isFavorite, setIsFavorite] = useState(() => {
        const saved = localStorage.getItem("favorites");
        const parsed = saved ? JSON.parse(saved) : [];
        return parsed.includes(id);
    });

    useEffect(() => {
        getGameById(id)
        .then(data => {
            setGame(data[0]); //IGDB returnerar en array
            setLoading(false);
        })
        .catch(error => {
            console.error("Error fetching game details:", error);
            setLoading(false);
        });
    }, [id]);

    //lägg i kundvagn (placeholder)
    const handleAddToCart = () => {
        console.log(`Lägger till ${game.name} i kundvagnen (${price} kr)`);
        //TODO: Lägg till i localStorage eller Context
    };

    //lägg till/ta bort från favoriter
    const toggleFavorite = () => {
        const saved = localStorage.getItem("favorites");
        const parsed = saved ? JSON.parse(saved) : [];

        let updated;
        if (parsed.includes(id)) {
        updated = parsed.filter(favId => favId !== id);
        } else {
        updated = [...parsed, id];
        }

        localStorage.setItem("favorites", JSON.stringify(updated));
        setIsFavorite(!isFavorite);
    };

    if (loading) return <p className="text-subtext">Loading game details...</p>;
    if (!game) return <p className="text-alert">Game not found.</p>;

    return (
        <section className="text-text">
            {/* Tillbaka-länk */}
            <Link
                to="/"
                className="inline-block mb-4 text-primary hover:underline"
            >
                ← Back to games
            </Link>

            {/* Namn */}
            <h1 className="text-3xl font-heading text-primary mb-2">{game.name}</h1>

            {/* Pris */}
            <p className="text-xl text-glow font-bold mb-4">{price} kr</p>

            {/* Bild */}
            {game.cover && (
                <img
                src={game.cover.url.replace("t_thumb", "t_cover_big")}
                alt={game.name}
                className="mb-4 rounded"
                />
            )}

            {/* Sammanfattning */}
            <p className="text-subtext">{game.summary || "No description available."}</p>
        
            <div className="flex gap-4 mt-6">
                {/* Knapp: Lägg i kundvagn */}
                <button
                    onClick={handleAddToCart}
                    className="bg-primary text-background font-bold py-2 px-4 rounded hover:bg-accent transition"
                >
                    🛒 Lägg i kundvagn
                </button>

                <button
                    onClick={toggleFavorite}
                    className={`py-2 px-4 rounded font-bold transition ${
                        isFavorite
                            ? "bg-red-500 text-white hover:bg-red-400"
                            : "bg-secondary text-background hover:bg-primary"
                    }`}
                >
                    {isFavorite ? "❤️ Favorit" : "🤍 Lägg till i favoriter"}
                </button>
            </div>
        </section>
    );
}

export default GameDetails;
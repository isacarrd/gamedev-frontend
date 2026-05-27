import GameCard from "./GameCard";

function GameRow({ title, games }) {
  if (games.length === 0) {
    return null;
  }

  return (
    <section className="movie-row">
      <h2>{title}</h2>
      <div className="movie-list">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}

export default GameRow;

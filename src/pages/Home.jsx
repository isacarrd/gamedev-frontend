import { games } from "../data/games";
import FeaturedGame from "../components/FeaturedGame";
import GameRow from "../components/GameRow";
import Header from "../components/Header";

function Home() {
  const featuredGame = games.find((game) => game.featured === true);

  const categories = ["Releases", "Action", "Classic Games", "Horror", "Race"];
  return (
    <div>
      <Header />
      <FeaturedGame game={featuredGame} />
      <main className="content">
        {categories.map((category) => {
          const filteredGames = games.filter((game) => game.category && game.category.includes(category));

          return (
            <GameRow key={category} title={category} games={filteredGames} />
          );
        })}
      </main>
    </div>
  );
}

export default Home;

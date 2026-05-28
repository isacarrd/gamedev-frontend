import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { games } from "../data/games";

function GameDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const game = games.find((item) => item.id === Number(id));

  if (!game) {
    return (
      <div>
        <Header />
        <div className="details-page">
          <h2>Game not Found.</h2>
          <button onClick={() => navigate("/home")}>Voltar</button>{" "}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <section
        className="details-page"
        style={{
          backgroundImage: `linear-gradient(to right, #111 40%, transparent), url('${game.bannerImage}')`,
        }}
      >
        <div className="details-content">
          <h1>{game.title}</h1>
          <p>{game.description}</p>
          <span>Category: {`${game.category}`}</span> <span>Developher: {game.developher}</span>
          <div className="details-buttons">
            <button>Play Now</button>
            <button onClick={() => navigate("/home")}>Go Back</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GameDetails;

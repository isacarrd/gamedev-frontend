import { useNavigate } from "react-router-dom";

function FeaturedGame({ game }) {
  const navigate = useNavigate();

  if (!game) {
    return null;
  }

  return (
    <section
      className="featured"
      style={{
        backgroundImage: `linear-gradient(to right, #111 30%, transparent), url(${game.bannerImage})`,
      }}
    >
      <div className="featured-content">
        <h2>{game.title}</h2>
        <p>{game.description}</p>
        <div className="featured-buttons">
          <button>Play</button>
          <button onClick={() => navigate(`/game/${game.id}`)}>
            See Details
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedGame;

import { useNavigate } from "react-router-dom"; 
import { games } from "../data/games";

function GameCard({ game }) {

  const navigate = useNavigate(); 

  return (
    <div
      className="movie-card" 
      onClick={() => navigate(`/game/${game.id}`)} 
    >
      <img src={game.coverImage} alt={game.title} />

      <h3>{game.title}</h3>
      <span>{`${game.type}`}</span>

    </div>
  );
}

export default GameCard; 

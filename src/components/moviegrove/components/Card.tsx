import { Link } from "react-router-dom";
import PlayIcon from "/images/play.png";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import "@styles/moviedb/Card.scss";

interface CardProps {
  id: number | string,
  title: string,
  image: string,
  rating: string,
  type: string
}

const Card = ({ id, title, image, rating, type }: CardProps) => {

  const linkTitle = `/${type}/${title.toLowerCase().replace(/\s/g, "-")}/${id}`;


  return (
    <div className="movie-card full-width">
      <div className="image-container full-width full-height">
        <Link to={linkTitle}>
          <img className="image"
            src={
              image != null
                ? `https://image.tmdb.org/t/p/w185${image}`
                : "https://i.ibb.co/d4F5nGV/no-image.png"
            }
            alt={`${title} Poster`}
          />
          <img id="playIcon" className="play-icon" src={PlayIcon} alt="Play" />
          <span className="rating flex-centered-container-vr">
            <StarRoundedIcon fontSize="small" />
            <span>
              {rating && rating.toString().length > 3
                ? rating.toString().slice(0, 3)
                : rating}
            </span>
          </span>
        </Link>
      </div>
      <Link to={linkTitle} className="card-title text-ellipsis full-width">
        {title}
      </Link>
    </div>
  )
}

export default Card
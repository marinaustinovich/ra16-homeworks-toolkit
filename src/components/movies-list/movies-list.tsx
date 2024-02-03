import { useCallback } from "react";
import { Movie } from "../../store";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { EmptyBlock } from "../empty-block";
import { FavoriteButtons } from "..";

import "./movies-list.css";

type MovieItemProps = {
  movie: Movie;
};

export const MovieItem = ({ movie }: MovieItemProps) => {
  const { Title, Year, Type, Poster, imdbID } = movie;
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/${imdbID}`);
  }, [imdbID, navigate]);

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4" onClick={handleClick}>
      <Card className="h-100 shadow-sm">
        <Card.Img variant="top" src={Poster} alt={`Poster of ${Title}`} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Text>
            Year: {Year}
            <br />
            Type: {Type}
          </Card.Text>
          <FavoriteButtons movie={movie} />
        </Card.Body>
      </Card>
    </div>
  );
};

type MoviesListProps = {
  movies: Movie[] | null;
  emptyTitle: string;
  emptyContent: string;
};

export const MoviesList = ({
  movies,
  emptyContent,
  emptyTitle,
}: MoviesListProps) => {

  if (!movies || !movies.length) {
    return <EmptyBlock title={emptyTitle} content={emptyContent} />;
  }

  return (
    <div className="list p-5">
      <div className="row g-4">
        {movies.map((movie) => (
          <MovieItem key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

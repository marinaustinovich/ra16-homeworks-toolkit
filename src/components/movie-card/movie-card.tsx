import { useEffect } from "react";

import { Stars } from "../stars";
import {
  fetchMovieDetails,
  getErrorResponse,
  getSelectedMovie,
} from "../../store";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { EmptyBlock } from "../empty-block";
import { Preloader } from "..";

export const MovieCard = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const movie = useSelector(getSelectedMovie);
  const error = useSelector(getErrorResponse);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetails(id));
    }
  }, [id, dispatch]);

  return movie ? (
    <Card className="mx-auto" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={movie.Poster}
        alt={`Poster of ${movie.Title}`}
      />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Stars count={parseInt(movie.imdbRating, 10)} />
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Year: {movie.Year}</ListGroupItem>
        <ListGroupItem>Genre: {movie.Genre}</ListGroupItem>
        <ListGroupItem>Runtime: {movie.Runtime}</ListGroupItem>
        <ListGroupItem>Director: {movie.Director}</ListGroupItem>
        <ListGroupItem>Actors: {movie.Actors}</ListGroupItem>
        <ListGroupItem>IMDB Rating: {movie.imdbRating}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#" className="btn btn-primary">
          Buy
        </Card.Link>{" "}
        <Card.Link href="#" className="btn btn-secondary">
          Details
        </Card.Link>{" "}
      </Card.Body>
    </Card>
  ) : error ? (
    <EmptyBlock title="Not Found Details" content={error.Error} type="error" />
  ) : (
    <Preloader />
  );
};

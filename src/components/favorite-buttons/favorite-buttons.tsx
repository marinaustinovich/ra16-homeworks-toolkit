import { useCallback } from "react";
import { Movie, RootState, makeIsMovieFavoriteSelector } from "../../store";
import { Button } from "react-bootstrap";

import { useAppDispatch } from "../../hooks";
import { addFavorite, removeFavorite } from "../../store/movies/slice";
import { useSelector } from "react-redux";

type Props = {
  movie: Movie;
};

export const FavoriteButtons = ({ movie }: Props) => {
  const { imdbID } = movie;

  const dispatch = useAppDispatch();
  const isFavorite = useSelector((state: RootState) =>
    makeIsMovieFavoriteSelector(state)(imdbID)
  );

  const handleAddToFavorites = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
      dispatch(addFavorite(movie));
    },
    [movie, dispatch]
  );

  const handleRemoveFromFavorites = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
      dispatch(removeFavorite(imdbID));
    },
    [dispatch, imdbID]
  );

  return !isFavorite ? (
    <Button variant="primary" onClick={handleAddToFavorites} type="button">
      Add to Favorites
    </Button>
  ) : (
    <Button variant="danger" onClick={handleRemoveFromFavorites} type="button">
      Remove from Favorites
    </Button>
  );
};

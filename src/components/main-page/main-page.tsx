import { Container } from "react-bootstrap";
import { MoviesList, Preloader } from "..";
import { SearchBar } from "../search-bar";
import { useAppDispatch } from "../../hooks";
import { useSelector } from "react-redux";
import { fetchMovies, getErrorResponse, getFilter, getIsLoading, getSearchMovies } from "../../store";
import { useEffect, useMemo } from "react";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const searchMovies = useSelector(getSearchMovies);
  const filter = useSelector(getFilter);
  const error = useSelector(getErrorResponse);
  const isLoading = useSelector(getIsLoading)
console.log(searchMovies, error)
  useEffect(() => {
    dispatch(fetchMovies(filter));
  }, [filter, dispatch]);

  const showMoviesList = useMemo(() => !isLoading && (error || searchMovies), [error, isLoading, searchMovies])

  return (
    <div className="main-page bg-light" style={{ minHeight: "100vh" }}>
      <Container fluid className="py-5">
        <h3>Movies</h3>
        <SearchBar />
        {showMoviesList && <MoviesList movies={searchMovies} emptyTitle="No movies found" emptyContent={error ? error.Error : "Try a different search!"}/>}
        {isLoading && <Preloader />}
      </Container>
    </div>
  );
};

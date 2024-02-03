
import { useSelector } from 'react-redux';
import { getFavorites } from '../../store';
import { MoviesList } from '..';

export const FavoritesPage = () => {
  const favorites = useSelector(getFavorites);

  return (
    <div className="container" style={{ minHeight: "100vh" }}>
      <h2>Favorites</h2>
      <MoviesList movies={favorites} emptyTitle="No favorites added yet." emptyContent="To search for films, go to the main page"/>
    </div>
  );
};
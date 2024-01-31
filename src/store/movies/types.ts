export type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
};

export type MoviesResponse = {
  Search: Movie[];
  totalResults: string;
  Response: boolean;
};

export type MoviesState = {
  movies: Movie[];
  favorites: Movie[];
  totalResults: string;
  selectedMovie: MovieDetails | null;
};

export type MovieDetails = Movie & {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};

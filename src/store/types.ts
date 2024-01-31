export type Film = {
  imdbID: string;
  title: string;
  year: string;
  type: string;
  poster: string;
};

export type FilmsResponse = {
  search: Film[];
  totalResults: string;
  response: boolean;
};

export type FilmsState = {
  films: Film[];
};

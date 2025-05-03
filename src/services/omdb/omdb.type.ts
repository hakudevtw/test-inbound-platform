export interface GetMoviesQuery {
  /**
   * @description Movie title to search for
   * @default "<empty>"
   */
  s: string;

  /**
   * @description Type of result to return
   * @default "<empty>"
   */
  type?: Type;

  /**
   * @description Year of release
   * @default "<empty>"
   */
  y?: string; // Year of release

  /**
   * @description Page number to return (1-100)
   * @default "1"
   */
  page?: number; // Page number to return
}

export type GetMoviesResponse = OMDBResponse<{
  Search: MovieBase[];
  totalResults: string; // e.g., "275"
}>;

export interface GetMovieQuery {
  /**
   * @description Type of result to return
   * @default "<empty>"
   */
  type?: Type;

  /**
   * @description Year of release
   * @default "<empty>"
   */
  y?: string;

  /**
   * @description Return short or full plot
   * @default "short"
   */
  plot?: Plot;
}

export type GetMovieResponse = OMDBResponse<MovieDetail>;

export type OMDBResponse<T> = T & {
  Response: 'True' | 'False';
  Error?: string;
};

export interface MovieBase {
  Title: string;
  Year: string;
  imdbID: string;
  Type: 'movie' | 'series' | 'episode';
  Poster: string;
}

export interface MovieDetail extends MovieBase {
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
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
}

export interface Rating {
  Source: string;
  Value: string;
}

export type Type = 'movie' | 'series' | 'episode';

export type Plot = 'short' | 'full';

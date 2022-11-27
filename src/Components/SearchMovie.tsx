import React, { useState } from "react";
import MovieCard from "./movieCard";

interface MovieCardProps {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
  adult: boolean
}

export default function MovieSearch() {
  type Movies =
    | []
    | [
        {
          id: number;
          title: string;
          poster_path: string;
          release_date: string;
          vote_average: number;
          overview: string;
          adult: boolean;
        }
      ];

  const [query, setQuery] = useState<string>("");

  const [movies, setMovies] = useState<Movies>([]);

  const searchMovies = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //prevent useScase of user submitting only spaces into input box
    if (query.replace(/\s/g, "") === "") return;
    //interpolate query into apiString to recieve a particular result of movie cards
    const url: string = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      //fetch data from api including query => parsed to json => set parsed Data to movie State
      const res: Response = await fetch(url);
      const data: any = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Avengers, Incredibles, Ect"
          value={query}
          //input box holds onChange/setquery function fired everytime user changes input box
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>

      <div className="card-list">
        {
          /* create movie card for every object filled in movies array */
          // filter results that dont have a movie poster for better user experience
        }
        {movies
          .filter(
            (movie: MovieCardProps) => movie.poster_path && movie.adult === true
          )
          .map((movie) => (
            <MovieCard
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              overview={movie.overview}
            />
          ))}
      </div>
    </>
  );
}

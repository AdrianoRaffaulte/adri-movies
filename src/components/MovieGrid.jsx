import MovieCard from "./Moviecard";
import { movies } from "../data/movies";

function MovieGrid() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "1.5rem",
        width: "100%",
        padding: "2rem",
        boxSizing: "border-box",
      }}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;

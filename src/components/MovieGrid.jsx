import { useState } from "react";
import { useMovies } from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieDetail from "./MovieDetail";

export default function MovieGrid() {
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("batman"); // START WITH A REAL TERM

  const { data: movies, isLoading, isError } = useMovies(search);
  const [selectedMovieId, setSelectedMovieId] = useState(null);


  return (
    <>
      {/* Barra de búsqueda */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Buscar películas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "8px",
            border: "1px solid #333",
            backgroundColor: "#111",
            color: "white",
            fontSize: "1rem",
            outline: "none",
          }}
        />
      </div>

      {/* Lista de películas */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} onClick={() => setSelectedMovieId(movie.imdbID)}>
              <MovieCard movie={movie} />
            </div>
          ))
        ) : (
          <p style={{ color: "white" }}>No se encontraron resultados.</p>
        )}
      </div>

      {/* Modal de detalles */}
      {selectedMovieId && (
        <MovieDetail
          movieId={selectedMovieId}
          onClose={() => setSelectedMovieId(null)}
        />
      )}
    </>
  );
}

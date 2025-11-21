import { useMovieDetail } from "../hooks/useMovieDetail";

export default function MovieDetail({ movieId, onClose }) {
  const { data, isLoading } = useMovieDetail(movieId);

  if (!movieId) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#1f1f1f",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "800px",
          width: "90%",
          color: "white",
          boxShadow: "0px 0px 20px rgba(255,255,255,0.1)",
          display: "flex",
          gap: "20px",
        }}
      >
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          <>
            <img
              src={data.Poster}
              alt={data.Title}
              style={{
                width: "250px",
                borderRadius: "10px",
              }}
            />

            <div>
              <h2>{data.Title}</h2>
              <p>{data.Year} • {data.Runtime}</p>
              <p><strong>Género:</strong> {data.Genre}</p>
              <p><strong>Director:</strong> {data.Director}</p>
              <p><strong>Actores:</strong> {data.Actors}</p>
              <p><strong>Rating IMDb:</strong> ⭐ {data.imdbRating}</p>

              <p style={{ marginTop: "10px", color: "#ccc" }}>
                {data.Plot}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

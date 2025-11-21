function MovieCard({ movie }) {
  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        color: "white",
        borderRadius: "12px",
        overflow: "hidden",
        width: "220px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{
          width: "100%",
          height: "330px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "12px" }}>
        <h3 style={{ margin: "0 0 6px 0", fontSize: "1rem" }}>
          {movie.Title}
        </h3>

        <p style={{ margin: "0", color: "#ccc" }}>
          {movie.Year}
        </p>

        
        <p style={{ margin: "6px 0 0 0", color: "#ffcc00" }}>
          {movie.Type === "movie" ? "Película" : movie.Type}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;

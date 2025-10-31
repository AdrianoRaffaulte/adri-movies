import Navbar from "./components/navbar";
import Container from "./components/Container";
import MovieGrid from "./components/MovieGrid";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <MovieGrid />
      </Container>
    </>
  );
}

export default App;

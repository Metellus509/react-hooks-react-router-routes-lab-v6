import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

export const moviesData = [
  { id: 1, title: "Doctor Strange", time: 115, genres: ["Action", "Adventure", "Fantasy"] },
  { id: 2, title: "Trolls", time: 92, genres: ["Animation", "Comedy"] },
  { id: 3, title: "Jack Reacher: Never Go Back", time: 118, genres: ["Action", "Thriller"] },
];

function Movie() {
  const { id } = useParams();
  const movie = moviesData.find((m) => m.id === parseInt(id));

  if (!movie) return <p>Movie not found</p>;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </main>
    </>
  );
}

export default Movie;

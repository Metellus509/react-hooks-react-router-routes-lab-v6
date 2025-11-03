import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const directorsData = [
  {
    name: "Scott Derrickson",
    movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
  },
  {
    name: "Mike Mitchell",
    movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
  },
  {
    name: "Edward Zwick",
    movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
  },
];

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    // Ici tu pourrais fetch depuis ton API si nécessaire
    setDirectors(directorsData);
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((director, index) => (
          <article key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, i) => (
                <li key={i}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;

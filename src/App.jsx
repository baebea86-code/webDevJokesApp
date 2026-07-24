import { useState, useEffect } from "react";
import FilterBar from "./components/FilterBar";
import JokeCard from "./components/JokeCard";
import Spinner from "./components/Spinner";
import ErrorMessage from "./components/ErrorMessage";
import useJokes from "./hooks/useJokes";

function App() {
  const [category, setCategory] = useState("Programming");

  const { joke, loading, error, fetchJoke } = useJokes();

  useEffect(() => {
    fetchJoke(category);
  }, []);

  return (
    <div className="app">
      <h1>Web Dev Jokes</h1>

      <p className="subtitle">
        Get a random joke using the JokeAPI.
      </p>

      <FilterBar
        category={category}
        setCategory={setCategory}
        fetchJoke={fetchJoke}
      />

      {loading && <Spinner />}

      {error && <ErrorMessage message={error} />}

      {joke ? (
        <JokeCard joke={joke} />
      ) : (
        <p style={{ textAlign: "center" }}>
          Choose a category and click <strong>Get Joke</strong>.
        </p>
      )}
    </div>
  );
}

export default App;
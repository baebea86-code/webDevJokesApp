import { useState } from "react";

function useJokes() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchJoke = async (category) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://v2.jokeapi.dev/${category}`
      );

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message);
      }

      setJoke(data);
    } catch (err) {
      setError("Failed to fetch a joke.");
    } finally {
      setLoading(false);
    }
  };

  return {
    joke,
    loading,
    error,
    fetchJoke,
  };
}

export default useJokes;
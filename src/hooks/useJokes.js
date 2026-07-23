import { useState } from "react";

function useJokes() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return {
    joke,
    loading,
    error,
  };
}

export default useJokes;
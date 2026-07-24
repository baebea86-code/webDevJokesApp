function JokeCard({ joke }) {
  return (
    <div className="joke-card">
      <h2>{joke.category}</h2>

      {joke.type === "single" ? (
        <p>{joke.joke}</p>
      ) : (
        <>
          <p><strong>{joke.setup}</strong></p>
          <p>{joke.delivery}</p>
        </>
      )}
    </div>
  );
}

export default JokeCard;
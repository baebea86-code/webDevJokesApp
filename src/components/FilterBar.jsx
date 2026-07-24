function FilterBar({ category, setCategory, fetchJoke }) {
  return (
    <div className="filter-bar">
      <label>Category:</label>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Programming">Programming</option>
        <option value="Misc">Misc</option>
        <option value="Pun">Pun</option>
        <option value="Spooky">Spooky</option>
        <option value="Christmas">Christmas</option>
        <option value="Any">Any</option>
      </select>

      <button onClick={() => fetchJoke(category)}>
        Get Joke
      </button>
    </div>
  );
}

export default FilterBar;
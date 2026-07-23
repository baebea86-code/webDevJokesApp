function FilterBar() {
  return (
    <div className="filter-bar">
      <label htmlFor="category">Category:</label>

      <select id="category">
        <option value="Programming">Programming</option>
        <option value="Misc">Misc</option>
        <option value="Dark">Dark</option>
        <option value="Pun">Pun</option>
        <option value="Spooky">Spooky</option>
        <option value="Christmas">Christmas</option>
        <option value="Any">Any</option>
      </select>

      <button>Get Joke</button>
    </div>
  );
}

export default FilterBar;
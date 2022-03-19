const Search = () => {
  return (
    <form action="/" method="get">
      <label htmlFor="header-search">
        <span className="navbar">Search Students</span>
      </label>
      <input
        type="text"
        id="header-search"
        placeholder="Search Students"
        name="s"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;

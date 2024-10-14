export const SearchBar = function ({ setQuery, setPageNo }) {
  const onsubmit = function (e) {
    e.preventDefault();
    setPageNo(1);
    setQuery(e.target.search.value);
  };
  return (
    <div className="search">
      <form onSubmit={onsubmit}>
        <input type="text" placeholder="Search for images..." name="search" />
        <button>Search</button>
      </form>
    </div>
  );
};

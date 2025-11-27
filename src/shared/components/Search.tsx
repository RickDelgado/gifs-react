interface SearchProps {
  placeholder: string;
  executeSearch: (term: string) => void;
}

const Search = ({ placeholder = "Buscar", executeSearch }: SearchProps) => {
  let searchInput: HTMLInputElement | null = null;

  return (
    <div className="search-container content-center">
      <input
        ref={(el) => {
          searchInput = el;
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const val = searchInput ? searchInput.value.trim() : "";
            if (val.length > 3) {
              executeSearch(val);
            }
          }
        }}
        type="text"
        placeholder={placeholder}
        className="input-search"
      />
      <button
        onClick={() => executeSearch(searchInput ? searchInput.value : "")}
      >
        Buscar
      </button>
    </div>
  );
};

export default Search;

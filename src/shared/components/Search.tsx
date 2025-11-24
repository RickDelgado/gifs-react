interface SearchProps {
  placeholder: string;
}

const Search = ({ placeholder = "Buscar" }: SearchProps) => {
  return (
    <div className="search-container content-center">
      <input type="text" placeholder={placeholder} className="input-search" />
      <button>Buscar</button>
    </div>
  );
};

export default Search;

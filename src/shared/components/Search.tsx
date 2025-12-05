import { useEffect, useState } from "react";

interface SearchProps {
  placeholder: string;
  onQuery: (term: string) => void;
}

const Search = ({ placeholder = "Buscar", onQuery }: SearchProps) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timoutId = setTimeout(() => {
      console.log("Buscando...", query);
      onQuery(query);
    }, 700);

    return () => {
      clearTimeout(timoutId);
    };
  }, [query]);

  const handleSearch = () => {
    const normalized = query.trim();
    if (!normalized) return;
    onQuery(normalized);
    // setQuery("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleSearch();
  };

  return (
    <div className="search-container content-center">
      <input
        type="text"
        placeholder={placeholder}
        className="input-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default Search;

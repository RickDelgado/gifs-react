interface PreviousSearchesProps {
  previousSearches: string[];
}

const PreviousSearches = ({ previousSearches }: PreviousSearchesProps) => {
  return (
    <div className="previous-searches">
      <h2>Búsquedas Previas</h2>
      <ul className="previous-searches-list">
        {previousSearches.map((search, index) => (
          <li key={index} className="previous-search-item">
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreviousSearches;

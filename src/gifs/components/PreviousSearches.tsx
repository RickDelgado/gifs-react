interface PreviousSearchesProps {
  previousSearches: string[];
  onLabelClicked: (label: string) => void;
}

const PreviousSearches = ({
  previousSearches,
  onLabelClicked,
}: PreviousSearchesProps) => {
  return (
    <div className="previous-searches">
      <h2>Búsquedas Previas</h2>
      <ul className="previous-searches-list">
        {previousSearches.map((search, index) => (
          <li key={index} onClick={() => onLabelClicked(search)}>
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreviousSearches;

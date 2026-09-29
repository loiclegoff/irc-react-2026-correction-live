import { PartCard } from "./PartCard";

export const PartList = ({ parts, loading, onPartSelection, selectedPart }) => {
  return (
    <div className="container list">
      <h2>Parts List</h2>
      <div>
        {loading ? (
          <p>Loading parts...</p>
        ) : (
          parts.map((r) => (
            <PartCard
              key={r.id}
              part={r}
              selected={selectedPart === r}
              onClick={() => onPartSelection(r)}
            />
          ))
        )}
      </div>
    </div>
  );
};

import { RobotCard } from "./RobotCard";

export const RobotsList = ({
  robots,
  loading,
  onRobotSelection,
  selectedRobot,
}) => {
  return (
    <div className="container list">
      <h2>Robot List</h2>
      <div>
        {loading ? (
          <p>Loading robots...</p>
        ) : (
          robots.map((r) => (
            <RobotCard
              key={r.id}
              selected={selectedRobot === r}
              robot={r}
              onClick={() => onRobotSelection(r)}
            />
          ))
        )}
      </div>
    </div>
  );
};

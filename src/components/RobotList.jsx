import { Robot } from "./Robot";

export function RobotList({ robots, selectedRobotId, onSelect }) {
  return (
    <section className="panel" aria-label="Robots">
      <h2>Robots</h2>
      <div className="item-list">
        {robots.map((robot) => (
          <Robot
            key={robot.id}
            robot={robot}
            selected={robot.id === selectedRobotId}
            onSelect={() => onSelect(robot.id)}
          />
        ))}
      </div>
    </section>
  );
}

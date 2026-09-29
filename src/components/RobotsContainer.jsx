import { useEffect, useState } from "react";
import { RobotList } from "./RobotList";
import { PartList } from "./PartList";
import { RobotDescription } from "./RobotDescription";

const API_URL = "https://robot-cpe.cleverapps.io";

export function RobotsContainer() {
  const [robots, setRobots] = useState([]);
  const [selectedRobotId, setSelectedRobotId] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/robots`)
      .then((response) => response.json())
      .then((data) => {
        setRobots(data);
        setSelectedRobotId(data[0]?.id ?? null);
      })
      .catch((error) => console.log(error));
  }, []);

  const selectedRobot = robots.find((robot) => robot.id === selectedRobotId);

  return (
    <div className="robots-container">
      <RobotList
        robots={robots}
        selectedRobotId={selectedRobotId}
        onSelect={setSelectedRobotId}
      />
      <PartList key={selectedRobotId} robot={selectedRobot} />
      <RobotDescription key={selectedRobotId} robotId={selectedRobotId} />
    </div>
  );
}

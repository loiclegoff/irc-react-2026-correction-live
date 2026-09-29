import { useState, useEffect } from 'react';
import { Robot } from './Robot';

export function RobotList({ onSelectRobot }) {
  const [robots, setRobots] = useState([])

  useEffect(() => {
    fetch('https://robot-cpe.cleverapps.io/robots')
      .then((response) => response.json())
      .then((data) => setRobots(data))
      .catch((error) => console.error('Error fetching robots:', error));
  }, []);

  if (robots.length === 0) {
    return <p>Loading robots...</p>
  }

  return (
    <div>
      <h2>Robot List</h2>
      <ul>
        {robots.map((robot) => (
          <Robot
            key={robot.id}
            id={robot.id}
            title={robot.title}
            src={robot.visual_src}
            type={robot.visual_type}
            partIds={robot.parts}
            onSelectRobot={onSelectRobot}
          />
        ))}
      </ul>
    </div>
  );
}
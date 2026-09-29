import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Robot } from './Robot';
import { selectRobots } from '../core/selectors';
import { loadRobots } from '../core/actions';

export function RobotList({ onSelectRobot }) {
  const [robots, setRobots] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://robot-cpe.cleverapps.io/robots')
      .then((response) => response.json())
      .then((data) => {
        setRobots(data);
        dispatch(loadRobots(data));
      })
      .catch((error) => console.error('Error fetching robots:', error));
  }, []);

  const robotsFromStore = useSelector(selectRobots);

  if (robots.length === 0) {
    return <p>Loading robots...</p>
  }


  return (
    <div>
      <h2>Robot List</h2>

      {JSON.stringify(robotsFromStore)}
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
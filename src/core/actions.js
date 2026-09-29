export function loadRobots(robots) {
  return {
    type: 'robot/LOAD_ROBOTS',
    payload: robots
  };
}
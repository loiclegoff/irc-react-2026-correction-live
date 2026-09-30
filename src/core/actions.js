export function loadRobots(robots) {
  return {
    type: 'robot/LOAD_ROBOTS',
    payload: robots
  };
}

export function updatePartIds(partIds) {
  return {
    type: 'part/UPDATE_PART_IDS',
    payload: partIds
  };
}

export function loadParts(parts) {
  return {
    type: 'part/LOAD_PARTS',
    payload: parts
  };
}

export function setSelectedPartId(partId) {
  return {
    type: 'part/SET_SELECTED_PART_ID',
    payload: partId
  };
}
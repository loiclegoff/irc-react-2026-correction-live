export const selectRobots = (state) => state.robotReducer.robots;
export const selectPartIds = (state) => state.partReducer.partIds;
export const selectParts = (state) => state.partReducer.parts;
export const selectSelectedPart = (state) => state.partReducer.parts.find((part) => part.id === state.partReducer.selectedPartId);
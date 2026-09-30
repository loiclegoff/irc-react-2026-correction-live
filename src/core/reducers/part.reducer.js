const partReducer = (state = { partIds: [], parts: [], selectedPartId: null }, action) => {
    switch (action.type) {
        case 'part/UPDATE_PART_IDS':
            return {
              ...state,
              partIds: action.payload
            };
        case 'part/LOAD_PARTS':
            return {
              ...state,
              parts: action.payload
            };

        case 'part/SET_SELECTED_PART_ID':
            return {
              ...state,
              selectedPartId: action.payload
            };
    default:
      return state;
    }
}

export default partReducer;

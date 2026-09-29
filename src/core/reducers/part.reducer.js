const partReducer = (state = { selectedPartId: null }, action) => {
    switch (action.type) {
        case 'UPDATE_SELECTED_PART':
            return {
              ...state,
              selectedPartId: action.payload
            };
    default:
      return state;
    }
}

export default partReducer;

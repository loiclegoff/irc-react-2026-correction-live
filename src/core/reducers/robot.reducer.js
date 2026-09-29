const robotReducer = (state = {
  robots: [],
}, action) => {
    switch (action.type) {
        case 'robot/LOAD_ROBOTS':
            return {
              ...state,
              robots: action.payload
            };

    default:
      return state;
    }
}

export default robotReducer;

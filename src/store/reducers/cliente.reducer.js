const initialState = {
  cliente: {},
};

const clienteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CLIENTE':
      return {
        ...state,
        cliente: action.payload,
      };
    default:
      return state;
  }
};

export default clienteReducer;

export const setMessage = message => ({
  type: 'SET_MESSAGE',
  payload: message
});

const initialState = {
  message: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};
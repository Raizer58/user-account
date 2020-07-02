export const setLogin = (user) => ({
  type: 'SET_LOGIN',
  user,
});

const INITIAL_STATE = {
  user: JSON.parse(sessionStorage.getItem('user')),
};

const reducer = (state = INITIAL_STATE, action) => {
  const {
    type,
    ...payload
  } = action;

  switch (type) {
    case 'SET_LOGIN':
      sessionStorage.setItem('user', JSON.stringify(action.user));
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default reducer;

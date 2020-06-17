export const chatReducer = (state, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case 'CONNECT_SB_USER':
      return {
        sendBirdUserObject: payload,
      };

    default:
      return state;
  }
};

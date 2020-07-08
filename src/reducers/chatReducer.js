export const chatReducer = (state, { type, payload }) => {
  switch (type) {
    case 'CONNECT_SB_USER':
      return {
        sendBirdUserObject: payload,
        isConnected: true,
      };

    default:
      return state;
  }
};

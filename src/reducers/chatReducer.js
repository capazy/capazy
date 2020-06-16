export const chatReducer = (state, { type, payload }) => {
  switch (type) {
    case 'UPDATE':
      return {
        ...state,
        loading: payload.loading,
        channel: payload.channel,
        messages: payload.messages,
        channelName: payload.channelName,
        participants: payload.participants,
      };

    default:
      return state;
  }
};

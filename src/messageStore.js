import { createStore, action } from 'easy-peasy';

const errorModel = {
  message: null,
  alertType: null,
  changeMassage: action((state, payload) => {
    state.message = payload.msg;
    state.alertType = payload.alertType;
  }),
};

const store = createStore(errorModel);

export default store;

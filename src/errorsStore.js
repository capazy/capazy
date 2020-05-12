import { createStore, action } from 'easy-peasy';

const errorModel = {
  message: null,
  changeMassage: action((state, payload) => {
    state.message = payload;
  }),
};

const store = createStore(errorModel);

export default store;

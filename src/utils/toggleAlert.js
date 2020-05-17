import store from '../errorsStore';

const toggleAlert = (msg) => {
  store.dispatch.changeMassage(msg);
  setTimeout(() => store.dispatch.changeMassage(null), 2000);
};

export default toggleAlert;

import store from '../messageStore';

const toggleAlert = (msg, alertType) => {
  store.dispatch.changeMassage({ msg, alertType });
  setTimeout(
    () => store.dispatch.changeMassage({ msg: null, alertType: null }),
    5000
  );
};

export default toggleAlert;

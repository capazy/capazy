export const transformArray = (object, field) => {
  let modify = [];

  object[field].map((item) => {
    return modify.push(item.value);
  });
  return modify;
};

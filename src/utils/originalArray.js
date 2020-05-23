export const originalArray = (arr) => {
  let array = [];
  arr.forEach((item) => {
    array.push({ value: item, label: item });
  });

  return array;
};

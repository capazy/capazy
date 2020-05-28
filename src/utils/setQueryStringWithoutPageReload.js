export const setQueryStringWithoutPageReload = (location, search, qsValue) => {
  location.search = `?${search}=`;
  const newurl = location.search + qsValue;

  window.history.pushState({ path: newurl }, '', newurl);
  // return modify;
};

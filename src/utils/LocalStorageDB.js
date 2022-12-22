export const setDataInLS = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getDataFromLS = (key) => {
  const str = localStorage.getItem(key);
  if (str) {
    return JSON.parse(str);
  }
  return null;
};

export const removeDataFromLS = (key) => {
  localStorage.removeItem(key);
};

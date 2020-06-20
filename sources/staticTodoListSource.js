
const getStaticTodosSource = (items) => {
  return new Promise((resolve) => {
    resolve(items);
  });
};

export default getStaticTodosSource;
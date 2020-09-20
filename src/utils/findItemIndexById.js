export const findItemIndexById = (items, id) => {
  return items.findIndex((item) => item.id === id);
};

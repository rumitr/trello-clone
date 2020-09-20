export const isHidden = (isPreview, draggedItem, itemType, id) => {
  return Boolean(
    !isPreview &&
      draggedItem &&
      draggedItem.type === itemType &&
      draggedItem.id === id
  );
};

import React, { useRef } from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";
import { Card } from "./Card";
import { useItemDrag } from "./useItemDrag";
import { useDrop } from "react-dnd";
import { isHidden } from "./utils/isHidden";

export const Column = ({ text, index, id, isPreview }) => {
  const { state, dispatch } = useAppState();
  const ref = useRef(null);

  const { drag } = useItemDrag({ type: "COLUMN", id, index, text });
  drag(ref);

  const [, drop] = useDrop({
    accept: "COLUMN",
    hover(item) {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      dispatch({ type: "MOVE_LIST", payload: { dragIndex, hoverIndex } });
      item.index = hoverIndex;
    },
  });
  drag(drop(ref));

  return (
    <ColumnContainer
      ref={ref}
      isHidden={isHidden(isPreview, state.draggedItem, "COLUMN", id)}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task, i) => (
        <Card text={task.text} key={task.id} index={i} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={(text) =>
          dispatch({ type: "ADD_TASK", payload: { text, columnId: id } })
        }
        dark
      />
    </ColumnContainer>
  );
};

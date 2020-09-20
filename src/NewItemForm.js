import React, { useState } from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles";

export const NewItemForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  return (
    <NewItemFormContainer>
      <NewItemInput value={text} onChange={(e) => setText(e.target.value)} />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};

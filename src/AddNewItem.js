import React, { useState } from "react";
import { AddItemButton } from "./styles.js";
import { NewItemForm } from "./NewItemForm";

export const AddNewItem = ({ onAdd, toggleButtonText, dark }) => {
  const [showForm, setShowForm] = useState(false);
  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
          console.log(text);
        }}
      />
    );
  }
  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};

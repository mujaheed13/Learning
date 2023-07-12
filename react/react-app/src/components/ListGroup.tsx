import React, { useState } from "react";
import Alert from "./Alert";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  const [selected_i, setSelected_i] = useState(-1);
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items?.map((item, i) => {
          return (
            <li
              key={item}
              className={
                i == selected_i ? "list-group-item active" : "list-group-item"
              }
              onClick={() => {
                setSelected_i(i);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
      {alertVisible && <Alert onClose={()=>{
        setAlertVisibility(false);
      }}/>}
      <button
        type="button"
        className="btn  btn-primary"
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        Base class
      </button>
    </>
  );
};

export default ListGroup;

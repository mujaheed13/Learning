import React, { useState } from "react";

interface Props { 
  items: string[];
  heading: string;
  onSelectItem: () => void
}

const ListGroup = ({items, heading, onSelectItem}: Props) => {

  const [selected_i, setSelected_i] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items?.map((item, i) => {
          return (
            <li key={item} className={i==selected_i ? "list-group-item active": "list-group-item" } onClick={()=>{
              setSelected_i(i);
              onSelectItem(item)
            }}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListGroup;

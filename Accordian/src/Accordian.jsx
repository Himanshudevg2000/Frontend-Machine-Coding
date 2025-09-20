import React, { useState } from "react";

const Accordian = ({ items }) => {
  console.log("items: ", items);

  const [openAccord, setOpenAccord] = useState(null);

  const openAccordian = (id) => {
    setOpenAccord(openAccord === id ? null : id);
  };

  if (!items || items.length === 0) {
    return <p>No Items Available</p>;
  }

  return (
    <div>
      {items &&
        items.map((item, index) => (
          <div key={index}>
            <button onClick={() => openAccordian(index)}> {item.title} </button>
            {openAccord == index && <div>{item.content}</div>}
          </div>
        ))}
    </div>
  );
};

export default Accordian;

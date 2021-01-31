import React from "react";

const ListGroup = ({
  items,
  TextProperty,
  ValueProperty,

  onItemSelect,
  selectedItem,
}) => {
  return (
    <ul className="list-group ">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[ValueProperty]}
          className={
            item === selectedItem
              ? "list-group-item active clickable"
              : "list-group-item clickable"
          }>
          {item[TextProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  TextProperty: "name",
  ValueProperty: "_id",
};
export default ListGroup;

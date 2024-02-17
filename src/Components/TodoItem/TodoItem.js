import React from "react";

const TodoItem = (dataProps) => {
  const { items, deleteHandler } = dataProps;
  let itemsLength = items.length;
  const ListItems = itemsLength ? (
    items.map((item) => {
      return (
        <div key={item.id}>
          <span className="task">{item.task}</span>
          <span className="sort">{item.sort}</span>
          <span className="action icon" onClick={() => deleteHandler(item.id)}>
            done
          </span>
        </div>
      );
    })
  ) : (
    <p>please add new task</p>
  );
  return (
    <div className="ListItems">
      <span className="task title">task</span>
      <span className="sort title">sort</span>
      <span className="action title">Action</span>
      {ListItems}
    </div>
  );
};
export default TodoItem;

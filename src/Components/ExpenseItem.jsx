import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants";
// import { moveExpense } from './redux/actions'; // Action to move expense

const ExpenseItem = ({ expense }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.EXPENSE,
    item: { type: ItemTypes.EXPENSE, id: expense.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    // end: (item, monitor) => {
    //   const dropResult = monitor.getDropResult();
    //   if (dropResult) {
    //     dispatch(moveExpense(expense.id, dropResult.category));
    //   }
    // },
  });

  return (
    <div
      ref={drag}
      className="text-center opacity-75 hover:opacity-100 cursor-move border border-gray-300 bg-blue-300 bg-opacity-50 rounded-md p-2 mb-2"
    >
      <p className="font-semibold">{expense?.name}</p>
      <p className="text-sm text-gray-600">${expense?.amount}</p>
    </div>
  );
};

export default ExpenseItem;

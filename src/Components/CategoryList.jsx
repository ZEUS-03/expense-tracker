import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { moveExpense } from "../store/slice/expenseSlice";
import { ItemTypes } from "../constants";
import ExpenseItem from "./ExpenseItem";
import { useSelector } from "react-redux";

const CategoryList = ({ category }) => {
  const dispatch = useDispatch();

  const expenses = useSelector((state) => state.expenses.expenses);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.EXPENSE,
    drop: (item, monitor) => {
      dispatch(
        moveExpense({ expenseId: item.id, targetCategory: category.name })
      );
    },
  });

  return (
    <div className="w-64 border border-solid border-gray-300 rounded-md p-4 mr-4">
      <h3 className="mb-2 text-center font-semibold">{category?.name}</h3>
      <div ref={drop} className="h-64 overflow-y-auto">
        {expenses
          ?.filter((expense) => expense?.category === category?.name)
          ?.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))}
      </div>
      {isOver && (
        <div className="mt-2 p-2 text-center text-gray-600 bg-yellow-200 rounded-md">
          Drop here
        </div>
      )}
    </div>
  );
};

export default CategoryList;

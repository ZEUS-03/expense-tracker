import React from "react";
import { useState } from "react";
import Input from "./helper/Input";
import { CATEGORIES } from "../constants";
import { v4 as uuidv4 } from "uuid";

import { useDispatch } from "react-redux";
import { addExpense } from "../store/slice/expenseSlice";
import Board from "./Board";

function CreateExpense() {
  const dispatch = useDispatch();
  const [expenseName, setExpenseName] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseDesc, setExpenseDesc] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseCat, setExpenseCat] = useState("");
  const [error, setError] = useState("");

  function handleChange(event) {
    setExpenseCat(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();

    setError("");

    let hasError = false;

    if (expenseName.trim() === "") {
      setError("Expense name is required");
      hasError = true;
      return;
    }

    if (expenseAmount.trim() === "") {
      setError("Expense amount is required");
      hasError = true;
      return;
    } else if (isNaN(expenseAmount)) {
      setError("Expense amount must be a number");
      hasError = true;
      return;
    }

    if (expenseDate.trim() === "") {
      setError("Expense date is required");
      hasError = true;
      return;
    }

    if (expenseDesc.trim() === "") {
      setError("Expense description is required");
      hasError = true;
      return;
    }

    if (expenseCat.trim() === "") {
      setError("Expense category is required");
      hasError = true;
      return;
    }

    if (hasError) {
      return;
    }

    console.log("Expense submitted successfully!");

    const newExpense = {
      id: uuidv4(),
      name: expenseName,
      amount: expenseAmount,
      date: expenseDate,
      description: expenseDesc,
      category: expenseCat,
    };

    dispatch(addExpense(newExpense));

    setExpenseName("");
    setExpenseAmount("");
    setExpenseDate("");
    setExpenseDesc("");
    setExpenseCat("");
  }

  return (
    <div>
      <h1 className="text-center mt-4 text-2xl font-medium mb-10">
        Create new expense
      </h1>
      <form>
        {error != "" && (
          <div className="text-center text-red-600 mb-4">{error}</div>
        )}
        <div className="flex justify-evenly mb-7">
          <Input
            label={"Expense Name"}
            onChange={setExpenseName}
            value={expenseName}
            type={"text"}
          />
          <Input
            label={"Expense Amount"}
            onChange={setExpenseAmount}
            value={expenseAmount}
            type={"number"}
          />
          <Input
            label={"Expense Date"}
            onChange={setExpenseDate}
            value={expenseDate}
            type={"date"}
          />
          <Input
            label={"Expense Description"}
            onChange={setExpenseDesc}
            value={expenseDesc}
            type={"textarea"}
          />
          <div className="flex flex-col">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={expenseCat}
              onChange={handleChange}
              className="p-1"
            >
              <option value="">Select a category</option>
              {CATEGORIES.map((option) => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          className="Btn border border-solid border-blue-500 rounded-md text-blue-500 p-3 mx-auto block mt-10"
          onClick={handleClick}
        >
          Create expense
        </button>
      </form>
      <Board />
    </div>
  );
}

export default CreateExpense;

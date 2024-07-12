import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateExpense } from "../../store/slice/expenseSlice";
import { deleteExpense } from "../../store/slice/expenseSlice";

const Modal = ({ expense, isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (expense) {
      setName(expense?.name);
      setAmount(expense?.amount);
      setDate(expense?.date);
      setDescription(expense?.description);
    }
  }, [expense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date || !description || !amount) {
      return;
    }
    const updatedExpense = {
      id: expense?.id,
      name,
      date,
      description,
      amount,
    };

    dispatch(
      updateExpense({
        id: expense.id,
        updatedExpense: updatedExpense,
      })
    );

    onClose();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteExpense(expense.id));

    onClose();
  };

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 ${
        isOpen ? "" : "hidden"
      }`}
      tabIndex="-1"
      aria-hidden={!isOpen}
    >
      <div className="relative p-4 w-full max-w-md">
        <div className="bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">
              Edit Expense
            </h3>
            <button
              type="button"
              className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex justify-center items-center"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M1 1l6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-4">
            <div className="grid gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Expense Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-solid"
                  placeholder="Type expense name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="amount"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Expense Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  defaultValue={expense?.amount}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full p-2 border border-solid"
                  placeholder="$"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Expense Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="p-2 border border-solid"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Expense Description
                </label>
                <textarea
                  id="description"
                  rows="4"
                  className="w-full p-2 border border-solid"
                  placeholder="Write expense description here"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex justify-between pt-4 border-t">
              <button
                className="border border-red-600 text-red-600 hover:text-white hover:bg-red-600 rounded-md p-2"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                type="submit"
                className="border border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 rounded-md p-2"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;

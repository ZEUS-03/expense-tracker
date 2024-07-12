import React from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const groupExpensesByMonth = (expenses) => {
  const grouped = {};

  expenses.forEach((expense) => {
    const monthYear = new Date(expense.date).toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    if (!grouped[monthYear]) {
      grouped[monthYear] = 0;
    }
    grouped[monthYear] += parseFloat(expense.amount);
  });

  return Object.entries(grouped)
    .map(([month, amount]) => ({ month, amount }))
    .sort((a, b) => new Date(a.month) - new Date(b.month)); // Sort by date
};

const Graph = () => {
  const expenses = useSelector((state) => state?.expenses?.expenses);

  const data = groupExpensesByMonth(expenses);

  return (
    <ResponsiveContainer width="75%" height={300} className="mx-auto mt-5">
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;

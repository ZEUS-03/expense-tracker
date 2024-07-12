import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expenses: []
}

const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.expenses.push(action.payload);
        },
        updateExpense: (state, action) => {
            const { id, updatedExpense } = action.payload;
            const existingExpenseIndex = state.expenses.findIndex(expense => expense.id === id);
            const cat = state.expenses.find(expense => expense.id === id);
            console.log(cat)
            if (existingExpenseIndex !== -1) {
                const existingExpense = state.expenses[existingExpenseIndex];
        
                const updatedExpenseObject = {
                ...existingExpense,
                ...updatedExpense,
                category: existingExpense.category,
                };
                
                state.expenses[existingExpenseIndex] = updatedExpenseObject;
            }
        },
        deleteExpense: (state, action) => {
            const id = action.payload;
            const existingExpenseIndex = state.expenses.findIndex(expense => expense.id === id);
            if (existingExpenseIndex !== -1) {
                state.expenses.splice(existingExpenseIndex, 1);
            }
        },
        moveExpense: (state, action) => {
            const { expenseId, targetCategory } = action.payload;
            const expense = state.expenses.find((exp) => exp.id === expenseId);
            if (expense) {
                expense.category = targetCategory;
            }
        }
    },
});

export const { addExpense, updateExpense, deleteExpense, moveExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
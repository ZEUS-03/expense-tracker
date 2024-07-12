import { useState } from "react";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateExpense from "./Components/CreateExpense";
import ManageExpenses from "./Components/ManageExpenses";
import ExpensesGraph from "./Components/ExpensesGraph";
import AllExpenses from "./Components/AllExpenses";
import { Provider } from "react-redux";
import store from "./store/store";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { persistor } from "./store/store";

import "./App.css";

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<CreateExpense />} />
              <Route path="/expenses" element={<AllExpenses />} />
              <Route path="/track" element={<ExpensesGraph />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;

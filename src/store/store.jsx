import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from './slice/expenseSlice';

import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    expenses: expensesReducer,
});
const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
});
export const persistor = persistStore(store);
export default store;
import {configureStore} from "@reduxjs/toolkit";
import {expenseSlice} from "./expense/expense-slice";
const Store = configureStore( {
    reducer: {
        EXPENSE : expenseSlice.reducer,
    },
})

export {Store};
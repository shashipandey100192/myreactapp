import { configureStore } from "@reduxjs/toolkit";
import myactionlists from"./Myactionslist.js";

export const mygodown= configureStore({
  reducer: {
    counter:myactionlists
  },
})
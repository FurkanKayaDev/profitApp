import { configureStore } from "@reduxjs/toolkit";

import calculateSlice from "./calculate/calculateSlice";

export const store = configureStore({
    reducer: {
        values: calculateSlice,
    },
});
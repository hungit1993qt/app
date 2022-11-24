import { configureStore } from "@reduxjs/toolkit";
import movie from "./Slices/movie";
import auth from "./Slices/auth";

const store = configureStore({
  reducer: {
    movie,
    auth,
  },
});

// type cho hàm dispatch
export type AppDispatch = typeof store.dispatch;
// type cho state
export type RootState = ReturnType<typeof store.getState>;

export default store;

//utility type
//ReturnType: trả vê type của object
//type abc (biến type giống var let const)
// function A(): number {
//   return 123;
// }
// // () => number
// type typeCuaHamA = ReturnType<typeof A>;

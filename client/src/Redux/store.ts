import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameReducer";
import personsReducer from "./personsReducer";
// import currenciesReducer from "./currenciesReducer";
// import gamesReducer from "./gamesReducer";
// import userDetailsReducer from "./userDetailsReducer";

export const store = configureStore({
    reducer: {
        // currenciesState :  currenciesReducer,
        // userState       :  userDetailsReducer,
        // gamesState      :  gamesReducer,
        personsState      :  personsReducer,
        gameState      :  gameReducer,
    }, 	
		middleware: (getDefaultMiddleware) =>
    		getDefaultMiddleware({
    			serializableCheck: false,
    		}),

});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

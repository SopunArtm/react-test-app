import { combineReducers, configureStore } from '@reduxjs/toolkit';

import primaryReducer from '@/store/reducers/primaryReducer';

const rootReducer = combineReducers({
  primary: primaryReducer,
});

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

const store = makeStore();

export default store;

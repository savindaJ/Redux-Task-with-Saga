// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import dataReducer from '../features/dataSlice';
import dataSaga from '../sagas/dataSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(dataSaga);

export default store;

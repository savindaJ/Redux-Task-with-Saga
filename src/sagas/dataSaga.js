// src/sagas/dataSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../features/dataSlice';

function* fetchDataSaga() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

function* dataSaga() {
  yield takeLatest(fetchDataRequest.type, fetchDataSaga);
}

export default dataSaga;

import { all } from 'redux-saga/effects';

import Sagas from './sagas/index.ts'


function* rootSaga() {
  yield all(Sagas);
}

export default rootSaga;
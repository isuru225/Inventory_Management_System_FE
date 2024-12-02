import rootReducer from './rootReducer';
import rootSaga from './rootSaga.ts';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

//const middleware = [...applyMiddleware(), sagaMiddleware];

const store = configureStore({
    reducer:rootReducer,
    middleware: () =>[sagaMiddleware],
})

sagaMiddleware.run(rootSaga);

export default store;



// const store = createStore(changeState)
// export default store

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from "redux-saga";
import rootSaga from './sagas/rootSaga'
import rootReducer from './reducers/rootReducer'


export default function configureStore (){
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(rootSaga);
    return store;
}

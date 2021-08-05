
// import Nav from './Nav';
// import Item from './Item';
// import cartReducer from './Reducer/cartReducer';
import { createStore } from 'redux'
//createStore is used for  to know compiler that cartReducer or any reducer is our store
import { Provider } from 'react-redux'
//Provider provide data from reducer to component
// import gameReducer from './Reducer/gameReducer';
// import rootReducer from './Reducer/rootReducer';
// import ComA from './ComA';
// import ComB from './ComB';
import Routes from './Routes';
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import {PersistGate} from 'redux-persist/integration/react'
import RootReducer from './redux-demo/reducer';
function App() {
  // const store = createStore(cartReducer)
  //const store=createStore(gameReducer)
  // const store=createStore(rootReducer)
  const persistConfig={
    key:'root',
    storage
  }
  const persistedReducer=persistReducer(persistConfig,RootReducer)
  const store=createStore(persistedReducer)
  const persistor=persistStore(store)
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          
        <Routes/>

        </PersistGate>
        {/* <Nav />
        <Item />
        <ComA/>
        <ComB/> */}
      
      </Provider>

    </>
  );
}

export default App;

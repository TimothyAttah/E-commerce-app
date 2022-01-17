import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { App } from './App';
import { GlobalStyle } from './styles/globalStyles';
import {store, persistor} from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={ store }>
      <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById( 'root' )
);

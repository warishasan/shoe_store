import React from 'react';
import './App.css';
import RouteConfig from './route.js';
import { Provider } from 'react-redux'
import { store } from "./redux/reducer"

function App() {
  return (
    <Provider store={store}>
    <div >
     
      <RouteConfig></RouteConfig>
    
    </div>
    </Provider>
  );
}

export default App;

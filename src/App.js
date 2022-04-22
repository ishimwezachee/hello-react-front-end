import React from "react";
import {BrowserRouter as Router,Route,Routes}  from 'react-router-dom';
import HelloWorld from './components/HelloWorld'
import configureStore from "./Redux/configureStore";
import { Provider } from "react-redux";
const store = configureStore();


class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
      <Router>
         <Routes>
           <Route path="/" element={<HelloWorld/>} />
         </Routes>
       </Router>
       </Provider>
    );
  }
}

export default App

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import HelloWorld from './components/HelloWorld';
import configureStore from './Redux/configureStore';

const store = configureStore();

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<HelloWorld />} />
          </Routes>
        </Router>
      </Provider>
    );
  }
}

export default App;

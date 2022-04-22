// import { createStore } from 'redux'
import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { GET_THINGS_SUCCESS } from '../components/HelloWorld';

const inititalState = {
  greetings: [
    {
      name: "Hi",
    },
  ],
};


function rootReducer(state, action) {
    console.log(action.type);
    switch (action.type) {
      case GET_THINGS_SUCCESS:
        return { greetings: action.json };
      default:
        return state;
    }
    
  }


export default function configureStore(){
    const store = createStore(
        rootReducer,
        inititalState,
        composeWithDevTools(
          applyMiddleware(logger, thunk)
        )
        );
    return store
}
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';
export const GET_THINGS_SUCCESS = 'GET_THINGS_SUCCESS';

export function getThingsSuccess(json) {
  return {
    type: GET_THINGS_SUCCESS,
    json,
  };
}

function getThings() {
  return (dispatch) => {
    dispatch({ type: GET_THINGS_REQUEST });
    return fetch('http://localhost:3000/greetings')
      .then((response) => response.json())
      .then((json) => dispatch(getThingsSuccess(json)))
      .catch((error) => console.log(`Fetching Error ${error}`));
  };
}

// eslint-disable-next-line react/prefer-stateless-function
class HelloWorld extends React.Component {
  render() {
    const { greetings } = this.props;
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    return (
      <>
        Greeting:
        {' '}
        <p>{randomGreeting.name}</p>
        <br />
        <button type="button" className="getThingsBtn" onClick={() => this.props.getThings()}>Greet Me</button>
      </>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: (state) => state.greetings,
});

const mapDispatchToProps = { getThings };

// HelloWorld.propTypes = {
//   greetings: PropTypes.string.isRequired,
// };

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);

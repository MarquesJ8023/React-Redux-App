import React from 'react';
import { connect } from 'react-redux';


import { getData } from './actions';

import Launch from './components/Launch';

const App = props => {

  return (
    <div>
      <h1>SpaceX Launches</h1>
      <button onClick={() => props.getData()}>
         Get SpaceX Data
      </button>
      {props.launches &&
        props.launches.map(fly => <Launch key={fly.name} launch={fly} />
        )}
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getData }
)(App);

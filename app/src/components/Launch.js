import React from 'react';

const Launch = props => {
  return (
    <div>
      <h4>{props.launch.name}</h4>
      <img src={props.launch.url} alt={props.launch.name} />
    </div>
  );
};

export default Launch;

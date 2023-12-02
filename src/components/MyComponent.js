import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MyComponent() {
  return (
    <div>
      <FontAwesomeIcon icon={['fas', 'home']} />
      <span> Home</span>
    </div>
  );
}

export default MyComponent;

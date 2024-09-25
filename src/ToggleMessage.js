// src/ToggleMessage.js
import React, { useReducer } from 'react';

// Initial state
const initialState = { isVisible: false };

// Reducer function
const visibilityReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_VISIBILITY':
      return { isVisible: !state.isVisible };
    default:
      return state;
  }
};

const ToggleMessage = () => {
  const [state, dispatch] = useReducer(visibilityReducer, initialState);

  return (
    <div className="toggle-container">
      <button
        onClick={() => dispatch({ type: 'TOGGLE_VISIBILITY' })}
        className="toggle-button"
      >
        Toggle Message
      </button>
      {state.isVisible && <p className="message">Hello, World!</p>}
    </div>
  );
};

export default ToggleMessage;

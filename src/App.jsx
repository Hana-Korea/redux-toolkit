import { useReducer, useState } from 'react';
import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'newUserInput':
      return { ...state, input: action.payload };
    case 'tgColor':
      return { ...state, color: !state.color };
    default:
      throw new Error();
  }
};

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  NEW_USER_INPUT: 'newUserInput',
  TG_COLOR: 'tgClor',
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    input: '',
    color: false,
  });

  return (
    <>
      <main style={{ color: state.color ? '#fff' : '#FF78C4' }}>
        <input
          type='text'
          value={state.input}
          onChange={(e) => {
            dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value });
          }}
        />
        <div style={{ display: 'flex' }}>
          <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>
            +
          </button>
          <div>{state.count}</div>
          <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>
            -
          </button>
          <button onClick={() => dispatch({ type: ACTION.TG_COLOR })}>
            Color
          </button>
        </div>
      </main>
    </>
  );
}

export default App;

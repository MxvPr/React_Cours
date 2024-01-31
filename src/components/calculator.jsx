import React, { useReducer } from 'react';

const actionTypes = {
  DIGIT: 'DIGIT',
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',
  MULTIPLY: 'MULTIPLY',
  DIVIDE: 'DIVIDE',
  EQUALS: 'EQUALS',
  CLEAR: 'CLEAR',
};

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.DIGIT:
      const newInput =
        state.currentInput === '0' ? action.payload : state.currentInput + action.payload;

      return {
        ...state,
        currentInput: newInput,
      };
    case actionTypes.ADD:
    case actionTypes.SUBTRACT:
    case actionTypes.MULTIPLY:
    case actionTypes.DIVIDE:
      return {
        ...state,
        currentInput: '0',
        operator: action.type,
        previousInput: state.currentInput,
      };
    case actionTypes.EQUALS:
      const prev = parseFloat(state.previousInput);
      const current = parseFloat(state.currentInput);
      let result = 0;

      switch (state.operator) {
        case actionTypes.ADD:
          result = prev + current;
          break;
        case actionTypes.SUBTRACT:
          result = prev - current;
          break;
        case actionTypes.MULTIPLY:
          result = prev * current;
          break;
        case actionTypes.DIVIDE:
          result = prev / current;
          break;
        default:
          result = current;
      }

      return {
        ...state,
        currentInput: result.toString(),
        operator: null,
        previousInput: '',
      };
    case actionTypes.CLEAR:
      return {
        ...state,
        currentInput: '0',
        operator: null,
        previousInput: '',
      };
    default:
      return state;
  }
};

const Calculator = () => {
  const [calculatorState, dispatch] = useReducer(calculatorReducer, {
    currentInput: '0',
    operator: null,
    previousInput: '',
  });

  const handleDigitClick = (digit) => {
    dispatch({ type: actionTypes.DIGIT, payload: digit });
  };

  const handleOperatorClick = (operator) => {
    dispatch({ type: operator });
  };

  const handleEqualsClick = () => {
    dispatch({ type: actionTypes.EQUALS });
  };

  const handleClearClick = () => {
    dispatch({ type: actionTypes.CLEAR });
  };

  return (
    <div className="calculator">
      <input type="text" value={calculatorState.currentInput} readOnly />
      <div className="button-row">
        <button onClick={() => handleDigitClick('7')}>7</button>
        <button onClick={() => handleDigitClick('8')}>8</button>
        <button onClick={() => handleDigitClick('9')}>9</button>
        <button onClick={() => handleOperatorClick(actionTypes.DIVIDE)}>/</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleDigitClick('4')}>4</button>
        <button onClick={() => handleDigitClick('5')}>5</button>
        <button onClick={() => handleDigitClick('6')}>6</button>
        <button onClick={() => handleOperatorClick(actionTypes.MULTIPLY)}>*</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleDigitClick('1')}>1</button>
        <button onClick={() => handleDigitClick('2')}>2</button>
        <button onClick={() => handleDigitClick('3')}>3</button>
        <button onClick={() => handleOperatorClick(actionTypes.SUBTRACT)}>-</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleDigitClick('0')}>0</button>
        <button onClick={handleClearClick}>C</button>
        <button onClick={handleEqualsClick}>=</button>
        <button onClick={() => handleOperatorClick(actionTypes.ADD)}>+</button>
      </div>
    </div>
  );
};

export default Calculator;

/* eslint-disable no-alert */
import './calculator.css';
import Digits from './Component/Digits';
import Modifier from './Component/Modifier';
import Operators from './Component/Operators';
import ResultScreen from './Component/ResultScreen';
import { ERROR_MESSAGES } from './constant/calculator';
import useCalculator from './hooks/useCalculator';
import { TOperators } from './types/calculator';

function App() {
  const {
    screen, resetScreen, addScreen, calculate, check,
  } = useCalculator();

  const onClickOperator = (v: TOperators) => () => {
    if (v === '=') {
      calculate();
      return;
    }

    if (check.isDigitFirst) {
      alert(ERROR_MESSAGES.ENTER_DIGIT_FIRST);
      return;
    }

    addScreen(v);
  };

  const onClickDigits = (v: number) => () => {
    if (check.isOverMaxDigitNumber) {
      alert(ERROR_MESSAGES.OVER_DIGIT_NUMBER);
      return;
    }

    addScreen(v.toString());
  };

  return (
    <div id="app">
      <div className="calculator">
        <ResultScreen screen={screen} />
        <Digits onClick={onClickDigits} />
        <Modifier onClick={resetScreen} />
        <Operators onClick={onClickOperator} />
      </div>
    </div>
  );
}

export default App;

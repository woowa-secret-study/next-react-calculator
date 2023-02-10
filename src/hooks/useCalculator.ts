import { useState } from 'react';
import { IUseCalculator } from '../types/calculator';
import { ERROR_MESSAGES, MAX_DIGIT_NUMBER } from '../constant/calculator';

const useCalculator = (): IUseCalculator => {
  const [screen, setScreen] = useState('');

  const [left = '', mid = '', right = ''] = screen
    .split(/([X/+-])/)
    .filter((v) => v);

  const addScreen = (v: string) => {
    setScreen((prev) => prev + v);
  };

  const resetScreen = () => {
    setScreen('');
  };

  const calculate = () => {
    const res = {
      '+': +left + +right,
      '-': +left - +right,
      X: +left * +right,
      '/': Math.floor(+left / +right),
    }[mid];

    if (res?.toString() === 'Infinity') {
      setScreen(ERROR_MESSAGES.INFINITIY);
      return;
    }

    setScreen(res?.toString() || '');
  };

  const check = {
    isDigitFirst: mid.length >= 1 || left.length < 1,
    isOverMaxDigitNumber:
      (left.length >= MAX_DIGIT_NUMBER && mid.length <= 0)
      || right.length >= MAX_DIGIT_NUMBER,
  };

  return {
    screen,
    addScreen,
    resetScreen,
    calculate,
    check,
  };
};

export default useCalculator;

export type TOperators = '/' | 'X' | '-' | '+' | '=';

interface ICheck {
    isDigitFirst: boolean;
    isOverMaxDigitNumber: boolean;
  }

export interface IUseCalculator {
    screen: string;
    check: ICheck;
    resetScreen: () => void;
    addScreen: (v: string) => void;
    calculate: () => void;
  }

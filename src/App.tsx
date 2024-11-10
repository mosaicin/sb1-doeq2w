import React, { useState } from 'react';
import { Calculator, Plus, Minus, X, Divide, Equal, Delete } from 'lucide-react';

function App() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [lastOperation, setLastOperation] = useState(false);

  const handleNumber = (num: string) => {
    setLastOperation(false);
    if (display === '0' || lastOperation) {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op: string) => {
    setLastOperation(true);
    setEquation(display + ' ' + op + ' ');
  };

  const calculate = () => {
    try {
      const result = eval(equation + display);
      setDisplay(String(result));
      setEquation('');
      setLastOperation(true);
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
    setLastOperation(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-4">
        {/* Forest Theme Header */}
        <div className="flex items-center justify-center gap-2 text-white mb-8">
          <Calculator className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Bear Calculator</h1>
        </div>

        {/* Calculator Body */}
        <div className="bg-brown-100 rounded-3xl p-6 shadow-2xl bg-opacity-90 backdrop-blur-sm border-4 border-amber-900">
          {/* Display */}
          <div className="bg-green-50 rounded-xl p-4 mb-4 h-24 flex flex-col justify-end items-end">
            <div className="text-gray-600 text-sm h-6">{equation}</div>
            <div className="text-4xl font-bold text-gray-800 break-all break-words">
              {display}
            </div>
          </div>

          {/* Buttons Grid */}
          <div className="grid grid-cols-4 gap-3">
            {/* Clear and Delete */}
            <button
              onClick={clear}
              className="col-span-2 bg-red-600 hover:bg-red-700 text-white p-4 rounded-xl font-bold transform hover:scale-95 transition-transform duration-150 ease-in-out shadow-lg flex items-center justify-center gap-2"
            >
              <span className="text-xl">Clear</span>
            </button>
            <button
              onClick={() => setDisplay(display.slice(0, -1) || '0')}
              className="col-span-2 bg-amber-600 hover:bg-amber-700 text-white p-4 rounded-xl font-bold transform hover:scale-95 transition-transform duration-150 ease-in-out shadow-lg flex items-center justify-center gap-2"
            >
              <Delete className="w-6 h-6" />
            </button>

            {/* Numbers and Operators */}
            {[7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumber(num.toString())}
                className="bg-amber-800 hover:bg-amber-900 text-white p-4 rounded-xl font-bold transform hover:scale-95 transition-transform duration-150 ease-in-out shadow-lg"
              >
                <div className="flex flex-col items-center">
                  <span className="text-2xl">🐻</span>
                  <span>{num}</span>
                </div>
              </button>
            ))}
            <button
              onClick={() => handleOperator('/')}
              className="bg-green-700 hover:bg-green-800 text-white p-4 rounded-xl font-bold transform hover:scale-95 transition-transform duration-150 ease-in-out shadow-lg"
            >
              <Divide className="w-6 h-6 mx-auto" />
            </button>

            {[4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={() => handleNumber(num.toString())}
                className="bg-amber-800 hover:bg-amber-900 text-white p-4 rounded-xl font-bold transform hover:scale-95 transition-transform duration-150 ease-in-out shadow-lg"
              >
                <div className="flex flex-col items-center">
                  <span className="text-2xl">🐻</span>
                  <span>{num}</span>
                </div>
              </button>
            ))}
            <button
              onClick={() => handleOperator('*')}
              className="bg-green-700 hover:bg-green-800 text-white p-4 rounded-xl font-bold transform hover:scale-95 transition-transform duration-150 ease-in-out shadow-lg"
            >
              <X className="w-6 h-6 mx-auto" />
            </button>

            {[1, 2, 3].map((num) => (
              <button
                key={num}
                onClick={() => handleNumber(num.toString())}
                className="bg-amber-800 hover:bg-amber-900 text-white p-4 rounded-xl font-bold transform hover:scale-95 transition-transform duration-150 ease-in-out shadow-lg"
              >
                <div className="flex flex-col items-center">
                  <span className="text-2xl">🐻</span>
                  <span>{num}</span>
                </div>
              </button>
            ))}
            <button
              onClick={() => handleOperator('-')}
              className="bg-green-700 hover:bg-green-800 text-white p-4 rounded-xl font-bold transform hover:scale-95 transition-transform duration-150 ease-in-out shadow-lg"
            >
              <Minus className="w-6 h-6 mx-auto" />
            </button>

            <button
              onClick={() => handleNumber('0')}
              className="bg-amber-800 hover:bg-amber-900 text-white p-4 rounded-xl font-bold transform hover:scale-95 transition-transform duration-150 ease-in-out shadow-lg"
            >
              <div className="flex flex-col items-center">
                <span className="text-2xl">🐻</span>
                <span>0</span>
              </div>
            </button>
            <button
              onClick={() => handleNumber('.')}
              className="bg-amber-800 hover:bg-amber-900 text-white p-4 rounded-xl font-bold transform hover:scale-95 transition-transform duration-150 ease-in-out shadow-lg"
            >
              <div className="flex flex-col items-center">
                <span className="text-2xl">🐻</span>
                <span>.</span>
              </div>
            </button>
            <button
              onClick={calculate}
              className="bg-green-700 hover:bg-green-800 text-white p-4 rounded-xl font-bold transform hover:scale-95 transition-transform duration-150 ease-in-out shadow-lg"
            >
              <Equal className="w-6 h-6 mx-auto" />
            </button>
            <button
              onClick={() => handleOperator('+')}
              className="bg-green-700 hover:bg-green-800 text-white p-4 rounded-xl font-bold transform hover:scale-95 transition-transform duration-150 ease-in-out shadow-lg"
            >
              <Plus className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>

        {/* Forest Footer */}
        <div className="text-center text-green-100 text-sm">
          🌲 Powered by Bear Math 🌲
        </div>
      </div>
    </div>
  );
}

export default App;
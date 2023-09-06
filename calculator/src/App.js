import React, { useState } from "react";
import "./App.css"; // Import your CSS file

import Wrapper from "./Wrapper";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";
import Button from "./Button";

const btnValues = [
  ["AC", "√", "%", "/"],
  [1, 2, 3, "X"],
  [4, 5, 6, "-"],
  [7, 8, 9, "+"],
  [0, ".", "="],
];

const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const App = () => {
  const [calc, setCalc] = useState({
    formula: "", // Store the user-entered expression
    result: 0,   // Store the calculation result
  });

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (calc.formula.length < 16) {
      setCalc({
        ...calc,
        formula:
          calc.formula === "0" && value === "0"
            ? "0"
            : calc.formula % 1 === 0
            ? calc.formula + value
            : calc.formula + value,
        result: 0,
      });
    }
  };

  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      formula: !calc.formula.toString().includes(".") ? calc.formula + value : calc.formula,
      result: 0,
    });
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
  
    // Check if the value is 'X' or '*' for multiplication
    const sign = value === 'X' ? '*' : value;
  
    setCalc({
      ...calc,
      formula: calc.formula + sign,
      result: 0,
    });
  };
  

  const sqrtClickHandler = () => {
    const num = parseFloat(removeSpaces(calc.formula));
  
    // Check if the input number is non-negative
    if (num >= 0) {
      try {
        // Use the Math.sqrt() function to calculate the square root
        const result = Math.sqrt(num);
        setCalc({
          ...calc,
          formula: `√(${calc.formula})`, // Update the formula to show the square root
          result: toLocaleString(result),
        });
      } catch (error) {
        setCalc({
          ...calc,
          formula: "Error",
          result: 0,
        });
      }
    } else {
      setCalc({
        ...calc,
        formula: "Invalid input",
        result: 0,
      });
    }
  };
  

  const equalsClickHandler = () => {
    if (calc.formula) {
      try {
        // Use the eval function to evaluate the expression
        const result = eval(removeSpaces(calc.formula));
        setCalc({
          ...calc,
          result: toLocaleString(result),
        });
      } catch (error) {
        setCalc({
          ...calc,
          formula: "Error",
          result: 0,
        });
      }
    }
  };
  

  const percentClickHandler = () => {
    let num = calc.formula ? parseFloat(removeSpaces(calc.formula)) : 0;

    setCalc({
      ...calc,
      formula: (num /= 100) + "%",
      result: 0,
    });
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      formula: "",
      result: 0,
    });
  };

  return (
    <Wrapper>
      <div className="formula">
        <Screen value={calc.formula} />
      </div>
      <div className="output">
        <Screen value={calc.result} />
      </div>
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={
                btn === "AC"
                  ? resetClickHandler
                  : btn === "%"
                  ? percentClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                  ? signClickHandler
                  : btn === "."
                  ? commaClickHandler
                  : btn === "√" // Add a button for square root
                  ? sqrtClickHandler
                  : numClickHandler
              }
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
import React, { useState } from "react";

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [orderValue, setOrderValue] = useState("");
  const [operator, setOperator] = useState("=");
  const [number, setNumber] = useState("0");
  const [equalPressed, setEqualPressed] = useState("");

  const handleButtonClick = (value) => {
    switch (value) {
      case "AC":
        setDisplayValue("0");
        setOrderValue("");
        setOperator("=");
        break;
      case "0":
        if (equalPressed == "=") {
          setDisplayValue("0");
          setOrderValue("0");
          setEqualPressed("");
        }
        setDisplayValue(displayValue + "0");
        if (displayValue.length == 1 && displayValue == "0") {
          setOrderValue(orderValue);
        } else {
          setOrderValue(orderValue + "0");
        }
        if (displayValue.length == 1 && displayValue == "0") {
          setDisplayValue("0");
        }
        break;
      case "1":
        if (equalPressed == "=") {
          setDisplayValue("1");
          setOrderValue("1");
          setEqualPressed("");
        } else {
          setDisplayValue(displayValue + "1");
          setOrderValue(orderValue + "1");
          if (displayValue.length == 1 && displayValue == "0") {
            setDisplayValue("1");
          }
        }
        break;
      case "2":
        if (equalPressed == "=") {
          setDisplayValue("2");
          setOrderValue("2");
          setEqualPressed("");
        } else {
          setDisplayValue(displayValue + "2");
          setOrderValue(orderValue + "2");
          if (displayValue.length == 1 && displayValue == "0") {
            setDisplayValue("2");
          }
        }
        break;
      case "3":
        if (equalPressed == "=") {
          setDisplayValue("3");
          setOrderValue("3");
          setEqualPressed("");
        } else {
          setDisplayValue(displayValue + "3");
          setOrderValue(orderValue + "3");
          if (displayValue.length == 1 && displayValue == "0") {
            setDisplayValue("3");
          }
        }

        break;
      case "4":
        if (equalPressed == "=") {
          setDisplayValue("4");
          setOrderValue("4");
          setEqualPressed("");
        } else {
          setDisplayValue(displayValue + "4");
          setOrderValue(orderValue + "4");
          if (displayValue.length == 1 && displayValue == "0") {
            setDisplayValue("4");
          }
        }
        break;
      case "5":
        if (equalPressed == "=") {
          setDisplayValue("5");
          setOrderValue("5");
          setEqualPressed("");
        } else {
          setDisplayValue(displayValue + "5");
          setOrderValue(orderValue + "5");
          if (displayValue.length == 1 && displayValue == "0") {
            setDisplayValue("5");
          }
        }
        break;
      case "6":
        if (equalPressed == "=") {
          setDisplayValue("6");
          setOrderValue("6");
          setEqualPressed("");
        } else {
          setDisplayValue(displayValue + "6");
          setOrderValue(orderValue + "6");
          if (displayValue.length == 1 && displayValue == "0") {
            setDisplayValue("6");
          }
        }
        break;
      case "7":
        if (equalPressed == "=") {
          setDisplayValue("7");
          setOrderValue("7");
          setEqualPressed("");
        } else {
          setDisplayValue(displayValue + "7");
          setOrderValue(orderValue + "7");
          if (displayValue.length == 1 && displayValue == "0") {
            setDisplayValue("7");
          }
        }
        break;
      case "8":
        if (equalPressed == "=") {
          setDisplayValue("8");
          setOrderValue("8");
          setEqualPressed("");
        } else {
          setDisplayValue(displayValue + "8");
          setOrderValue(orderValue + "8");
          if (displayValue.length == 1 && displayValue == "0") {
            setDisplayValue("8");
          }
        }
        break;
      case "9":
        if (equalPressed == "=") {
          setDisplayValue("9");
          setOrderValue("9");
          setEqualPressed("");
        } else {
          setDisplayValue(displayValue + "9");
          setOrderValue(orderValue + "9");
          if (displayValue.length == 1 && displayValue == "0") {
            setDisplayValue("9");
          }
        }
        break;
      /*************OPERATORS********************** */
      case "/":
        if (equalPressed == "=") {
          setDisplayValue("0");
          setOrderValue(orderValue.match(/=([0-9]+)/)[1] + "/");
          setEqualPressed("");
        } else if (
          orderValue === "" ||
          orderValue === "+" ||
          orderValue === "-"
        ) {
        } else if (
          orderValue[orderValue.length - 1] == "/" ||
          orderValue[orderValue.length - 1] == "x" ||
          orderValue[orderValue.length - 1] == "-" ||
          orderValue[orderValue.length - 1] == "+"
        ) {
          setOrderValue(orderValue.slice(0, -1) + "/");
        } else {
          setOrderValue(orderValue + "/");
          setDisplayValue("0");
          setOperator("/");
        }

        break;
      case "X":
        if (equalPressed == "=") {
          setDisplayValue("0");
          setOrderValue(orderValue.match(/=([0-9]+)/)[1] + "x");
          setEqualPressed("");
        } else if (
          orderValue === "" ||
          orderValue === "+" ||
          orderValue === "-"
        ) {
        } else if (
          orderValue[orderValue.length - 1] == "/" ||
          orderValue[orderValue.length - 1] == "x" ||
          orderValue[orderValue.length - 1] == "-" ||
          orderValue[orderValue.length - 1] == "+"
        ) {
          setOrderValue(orderValue.slice(0, -1) + "x");
        } else {
          setOrderValue(orderValue + "x");
          setDisplayValue("0");
          setOperator("x");
        }
        break;
      case "-":
        if (equalPressed == "=") {
          setDisplayValue("0");
          setOrderValue(orderValue.match(/=([0-9]+)/)[1] + "-");
          setEqualPressed("");
        } else if (
          orderValue[orderValue.length - 1] == "-" ||
          orderValue[orderValue.length - 1] == "+"
        ) {
          setOrderValue(orderValue.slice(0, -1) + "-");
        } else {
          setOrderValue(orderValue + "-");
          setDisplayValue("0");
          setOperator("-");
        }
        break;
      case "+":
        if (equalPressed == "=") {
          setDisplayValue("0");
          setOrderValue(orderValue.match(/=([0-9]+)/)[1] + "+");
          setEqualPressed("");
        } else if (
          orderValue[orderValue.length - 1] == "/" ||
          orderValue[orderValue.length - 1] == "x" ||
          orderValue[orderValue.length - 1] == "-" ||
          orderValue[orderValue.length - 1] == "+"
        ) {
          setOrderValue(orderValue.slice(0, -1) + "+");
        } else {
          setOrderValue(orderValue + "+");
          setDisplayValue("0");
          setOperator("+");
        }
        break;
      /*************Decimals************************ */
      case ".":
        if (equalPressed == "=") {
          console.log("here");
          setDisplayValue("0.");
          setOrderValue("0.");
          setEqualPressed("");
        } else {
          if (orderValue[orderValue.length - 1] == ".") {
            setDisplayValue(displayValue.slice(0, -1) + ".");
            if (!displayValue.match(/[.]/)) {
              setDisplayValue(displayValue.slice(0, -1) + ".");
              setOrderValue(orderValue.slice(0, -1) + ".");
            }
          } else {
            if (!displayValue.match(/[.]/)) {
              setOrderValue(orderValue + ".");
              setDisplayValue(displayValue + ".");
            }
          }
        }
        break;
      /**************Equal************************** */
      case "=":
        let numbers = [];
        let operators = [];
        let numberString = "";
        let minusSeen = false;
        let numberStill = false;
        let orderValueArray = orderValue.split("");
        console.log(orderValueArray);
        for (let i = orderValueArray.length; i >= 0; i--) {
          switch (orderValueArray[i]) {
            case "/":
              if (numberString != "") {
                numbers.push(parseFloat(numberString));
              } else {
                if (numbers[numbers.length - 1] < 0) {
                  operators.shift();
                }
              }
              numberString = "";
              operators.push("/");
              break;
            case "x":
              if (numberString != "") {
                numbers.push(parseFloat(numberString));
              } else {
                if (numbers[numbers.length - 1] < 0) {
                  operators.shift();
                }
              }
              numberString = "";
              operators.push("x");
              break;
            case "-":
              numbers.push(parseFloat(numberString) * -1);
              numberString = "";
              operators.push("+");
              break;
            case "+":
              numbers.push(parseFloat(numberString));
              numberString = "";
              operators.push("+");
              break;
            default:
              numberString = orderValueArray[i] + numberString;
              console.log(numberString);
              if (i == 0) {
                if (numberString) {
                  numbers.push(parseFloat(numberString));
                }
              }
          }
        }
        operators = operators.reverse();
        numbers = numbers.reverse();
        console.log(numbers);
        console.log(operators);
        setOrderValue(orderValue + "=" + calculateResult(numbers, operators));
        setDisplayValue("0");
        setEqualPressed("=");
        break;
    }
  };

  const calculateResult = (numbers, operators) => {
    let result;
    if (operators.length == 0) {
      result = numbers[0];
    } else {
      for (let i = 0; i < numbers.length - 1; i = i + 1) {
        console.log(result);
        if (i == 0) {
          result = doTheOperation(numbers[0], numbers[1], operators[i]);
        } else {
          result = doTheOperation(result, numbers[i + 1], operators[i]);
        }
      }
    }
    console.log(result);
    return result;
  };

  const doTheOperation = (number1, number2, operation) => {
    switch (operation) {
      case "x":
        return number1 * number2;
      case "/":
        return number1 / number2;
      case "+":
        return number1 + number2;
      case "-":
        return number1 - number2;
    }
  };

  /***************************************************************** */
  const divContainerStyle = {
    width: "440px",
    height: "620px",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    margin: "100px auto",
  };
  const divDiplayRowStyle = {
    width: "98%",
    height: "14%",
    backgroundColor: "rgb(81, 122, 71)",
    margin: "2% 1% 0% 1%",
  };
  /*************************************************** */
  const divRowOneStyle = {
    width: "98%",
    height: "16%",
    backgroundColor: "black",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    margin: "1% 1% 0% 1%",
  };
  const divACStyle = {
    width: "148%",
    height: "100%",
    backgroundColor: "rgb(119, 17, 17)",
    margin: "0% 0% 0% 0.5%",
  };
  const divDivisionStyle = {
    width: "73%",
    height: "100%",
    backgroundColor: "rgb(47, 47, 80)",
    margin: "0% 1% 0% 50%",
  };
  const divMultiplicationStyle = {
    width: "74%",
    height: "100%",
    backgroundColor: "rgb(47, 47, 80)",
    margin: "0% 1% 0% 25%",
  };
  /************************************************ */
  const divRowTwoStyle = {
    width: "98%",
    height: "16%",
    backgroundColor: "black",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    margin: "1% 1% 0% 1%",
  };
  const divSevenStyle = {
    width: "98%",
    height: "100%",
    backgroundColor: "rgb(47, 47, 80)",
    margin: "0% 0% 0% 1%",
  };
  const divEightStyle = {
    width: "97%",
    height: "100%",
    backgroundColor: "rgb(47, 47, 80)",
    margin: "0% 1% 0% 1%",
  };
  const divNineStyle = {
    width: "98%",
    height: "100%",
    backgroundColor: "rgb(47, 47, 80)",
    margin: "0% 0% 0% 0%",
  };
  const divMinusStyle = {
    width: "99%",
    height: "100%",
    backgroundColor: "rgb(47, 47, 80)",
    margin: "0% 1% 0% 0%",
  };
  /***************************************************** */
  const divRowThreeStyle = {
    width: "98%",
    height: "16%",
    backgroundColor: "black",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    margin: "1% 1% 0% 1%",
  };
  const divFourStyle = {
    width: "98%",
    height: "100%",
    backgroundColor: "rgb(47, 47, 80)",
    margin: "0% 0% 0% 1%",
  };
  const divFiveStyle = {
    width: "97%",
    height: "100%",
    backgroundColor: "rgb(47, 47, 80)",
    margin: "0% 1% 0% 1%",
  };
  const divSixtyle = {
    width: "98%",
    height: "100%",
    backgroundColor: "rgb(47, 47, 80)",
    margin: "0% 0% 0% 0%",
  };
  const divPlusStyle = {
    width: "99%",
    height: "100%",
    backgroundColor: "rgb(47, 47, 80)",
    margin: "0% 1% 0% 0%",
  };
  /****************************************** */
  const divRowFourStyle = {
    width: "98%",
    height: "16%",
    backgroundColor: "black",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    margin: "1% 1% 0% 1%",
  };
  const divOneStyle = {
    width: "98%",
    height: "100%",
    backgroundColor: "rgb(47, 47, 80)",
    margin: "0% 0% 0% 1%",
  };
  const divTwoStyle = {
    width: "97%",
    height: "100%",
    backgroundColor: "rgb(47, 47, 80)",
    margin: "0% 1% 0% 1%",
  };
  const divThreetyle = {
    width: "98%",
    height: "100%",
    backgroundColor: "rgb(47, 47, 80)",
    margin: "0% 0% 0% 0%",
  };
  const divEqualStyle = {
    width: "99%",
    height: "204%",
    backgroundColor: "rgb(47, 47, 80)",
    margin: "0% 1% 0% 0%",
  };
  /*************************************************** */
  const divRowFiveStyle = {
    width: "73%",
    height: "16%",
    backgroundColor: "black",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    margin: "1% 1% 0% 1%",
  };
  const divZeroStyle = {
    width: "133%",
    height: "100%",
    backgroundColor: "rgb(47, 47, 80)",
    margin: "0% 0% 0% 0%",
  };
  const divDotStyle = {
    width: "66%",
    height: "100%",
    backgroundColor: "rgb(47, 47, 80)",
    margin: "0% 0% 0% 34%",
  };
  /************************************************** */

  return (
    <div className="App">
      <div style={divContainerStyle}>
        <div style={divDiplayRowStyle}>
          <div className="order">{orderValue}</div>
          <div className="display" id="display">
            {displayValue}
          </div>
        </div>

        <div style={divRowOneStyle}>
          <div
            style={divACStyle}
            className="Button AC"
            id="clear"
            onClick={() => handleButtonClick("AC")}
          >
            <p>AC/ON</p>
          </div>
          <div
            style={divDivisionStyle}
            className="Button"
            id="divide"
            onClick={() => handleButtonClick("/")}
          >
            <p>/</p>
          </div>
          <div
            style={divMultiplicationStyle}
            className="Button"
            id="multiply"
            onClick={() => handleButtonClick("X")}
          >
            <p>X</p>
          </div>
        </div>

        <div style={divRowTwoStyle}>
          <div
            style={divSevenStyle}
            className="Button"
            id="seven"
            onClick={() => handleButtonClick("7")}
          >
            <p>7</p>
          </div>
          <div
            style={divEightStyle}
            className="Button"
            id="eight"
            onClick={() => handleButtonClick("8")}
          >
            <p>8</p>
          </div>
          <div
            style={divNineStyle}
            className="Button"
            id="nine"
            onClick={() => handleButtonClick("9")}
          >
            <p>9</p>
          </div>
          <div
            style={divMinusStyle}
            className="Button"
            id="subtract"
            onClick={() => handleButtonClick("-")}
          >
            <p>-</p>
          </div>
        </div>

        <div style={divRowThreeStyle}>
          <div
            style={divFourStyle}
            className="Button"
            id="four"
            onClick={() => handleButtonClick("4")}
          >
            <p>4</p>
          </div>
          <div
            style={divFiveStyle}
            className="Button"
            id="five"
            onClick={() => handleButtonClick("5")}
          >
            <p>5</p>
          </div>
          <div
            style={divSixtyle}
            className="Button"
            id="six"
            onClick={() => handleButtonClick("6")}
          >
            <p>6</p>
          </div>
          <div
            style={divPlusStyle}
            className="Button"
            id="add"
            onClick={() => handleButtonClick("+")}
          >
            <p>+</p>
          </div>
        </div>

        <div style={divRowFourStyle}>
          <div
            style={divOneStyle}
            className="Button"
            id="one"
            onClick={() => handleButtonClick("1")}
          >
            <p>1</p>
          </div>
          <div
            style={divTwoStyle}
            className="Button"
            id="two"
            onClick={() => handleButtonClick("2")}
          >
            <p>2</p>
          </div>
          <div
            style={divThreetyle}
            className="Button"
            id="three"
            onClick={() => handleButtonClick("3")}
          >
            <p>3</p>
          </div>
          <div
            style={divEqualStyle}
            className="Button"
            id="equals"
            onClick={() => handleButtonClick("=")}
          >
            <p id="equal">=</p>
          </div>
        </div>

        <div style={divRowFiveStyle}>
          <div
            style={divZeroStyle}
            className="Button"
            id="zero"
            onClick={() => handleButtonClick("0")}
          >
            <p>0</p>
          </div>
          <div
            style={divDotStyle}
            className="Button"
            id="decimal"
            onClick={() => handleButtonClick(".")}
          >
            <p>.</p>
          </div>
        </div>
      </div>
      <div>
        <h1>Designed and coded bY:</h1>
        <h1>Saeed</h1>
      </div>
    </div>
  );
}

export default App;

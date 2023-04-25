import React, { useState,  } from "react";

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [orderValue, setOrderValue] = useState("");
  const [operator, setOperator] = useState("=");
  const [number, setNumber] = useState("0");
  const [beforeEqual, setBeforeEqual] = useState("");

  const handleButtonClick = (value) => {
    switch (value) {
      case "AC" :
        setDisplayValue("0");
        setOrderValue("");
        setOperator("=");
        break;
      case "0":
        setDisplayValue(displayValue + "0");
        if ((displayValue.length == 1) && (displayValue == "0")) {
          setOrderValue(orderValue);
        } else {
          setOrderValue(orderValue + "0");
        }
        if ((displayValue.length == 1) && (displayValue == "0")) {
          setDisplayValue ("0");
        }
        break;
      case "1":
        setDisplayValue(displayValue + "1");
        setOrderValue(orderValue + "1");
        if ((displayValue.length == 1) && (displayValue == "0")) {
          setDisplayValue ("1");
        }
        break;
      case "2":
        setDisplayValue(displayValue + "2");
        setOrderValue(orderValue + "2");
        if ((displayValue.length == 1) && (displayValue == "0")) {
          setDisplayValue ("2");
        }
        break;
      case "3":
        setDisplayValue(displayValue + "3");
        setOrderValue(orderValue + "3");
        if ((displayValue.length == 1) && (displayValue == "0")) {
          setDisplayValue ("3");
        }
        break;
      case "4":
        setDisplayValue(displayValue + "4");
        setOrderValue(orderValue + "4");
        if ((displayValue.length == 1) && (displayValue == "0")) {
          setDisplayValue ("4");
        }
        break;
      case "5":
        setDisplayValue(displayValue + "5");
        setOrderValue(orderValue + "5");
        if ((displayValue.length == 1) && (displayValue == "0")) {
          setDisplayValue ("5");
        }
        break;
      case "6":
        setDisplayValue(displayValue + "6");
        setOrderValue(orderValue + "6");
        if ((displayValue.length == 1) && (displayValue == "0")) {
          setDisplayValue ("6");
        }
        break;
      case "7":
        setDisplayValue(displayValue + "7");
        setOrderValue(orderValue + "7");
        if ((displayValue.length == 1) && (displayValue == "0")) {
          setDisplayValue ("7");
        }
        break;
      case "8":
        setDisplayValue(displayValue + "8");
        setOrderValue(orderValue + "8");
        if ((displayValue.length == 1) && (displayValue == "0")) {
          setDisplayValue ("8");
        }
        break;
      case "9":
        setDisplayValue(displayValue + "9");
        setOrderValue(orderValue + "9");
        if ((displayValue.length == 1) && (displayValue == "0")) {
          setDisplayValue ("9");
        }
        break;
      /*************OPERATORS********************** */
      case "/":
        if ((orderValue==="")||(orderValue==="+")||(orderValue==="-")) {

        }
        else if ((orderValue[orderValue.length-1] == "/")||(orderValue[orderValue.length-1] == "x")||(orderValue[orderValue.length-1] == "-")||(orderValue[orderValue.length-1] == "+")||(orderValue[orderValue.length-1] == ".")){
          setOrderValue(orderValue.slice(0, -1)+"/");
        } else {
          setOrderValue(orderValue + "/");
          setDisplayValue("0");
          setOperator("/");
        }
        break;
      case "X":
        if ((orderValue==="")||(orderValue==="+")||(orderValue==="-")) {
          
        }
        else if ((orderValue[orderValue.length-1] == "/")||(orderValue[orderValue.length-1] == "x")||(orderValue[orderValue.length-1] == "-")||(orderValue[orderValue.length-1] == "+")||(orderValue[orderValue.length-1] == ".")){
          setOrderValue(orderValue.slice(0, -1)+"x");
        } else {
          setOrderValue(orderValue + "x");
          setDisplayValue("0");
          setOperator("x");
        }
        break;
      case "-":
        if ((orderValue[orderValue.length-1] == "/")||(orderValue[orderValue.length-1] == "x")||(orderValue[orderValue.length-1] == "-")||(orderValue[orderValue.length-1] == "+")||(orderValue[orderValue.length-1] == ".")){
          setOrderValue(orderValue.slice(0, -1)+"-");
        } else {
          setOrderValue(orderValue + "-");
          setDisplayValue("0");
          setOperator("-");
        }
        break;
      case "+":
        if ((orderValue[orderValue.length-1] == "/")||(orderValue[orderValue.length-1] == "x")||(orderValue[orderValue.length-1] == "-")||(orderValue[orderValue.length-1] == "+")||(orderValue[orderValue.length-1] == ".")){
          setOrderValue(orderValue.slice(0, -1)+"+");
        } else {
          setOrderValue(orderValue + "+");
          setDisplayValue("0");
          setOperator("+");
        }
        break;
      /*************Decimals************************ */
      case ".":
        if ((orderValue[orderValue.length-1] == "/")||(orderValue[orderValue.length-1] == "x")||(orderValue[orderValue.length-1] == "-")||(orderValue[orderValue.length-1] == "+")||(orderValue[orderValue.length-1] == ".")){
          setDisplayValue(displayValue.slice(0, -1)+".");
          if(!(displayValue.match(/[.]/))) {
            setDisplayValue(displayValue.slice(0, -1)+".");
            setOrderValue(orderValue.slice(0, -1)+".");
          }
        } else {
          if(!(displayValue.match(/[.]/))) {
            setOrderValue(orderValue+".");
            setDisplayValue(displayValue+".");
          }
        }
        break;
      /**************Equal************************** */
      case "=":
        let numbers = orderValue.split(/[/+x-]+/).map(number=>parseFloat(number))
        let operators=orderValue.match(/[+-/x]/g).filter(item=> item!==".");
        console.log(numbers);
        console.log(operators);
        setDisplayValue(calculateResult(numbers, operators));
        break;
    }
  };

  const calculateResult = (numbers, operators) => {
    let result = operators.forEach(element => {
      
    });
    return result
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

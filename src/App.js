import React from "react";

function App() {
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

  return (
    <div className="App">
      <div style={divContainerStyle}>
        <div style={divDiplayRowStyle}></div>

        <div style={divRowOneStyle}>
          <div style={divACStyle} className="Button AC">
            <p>AC</p>
          </div>
          <div style={divDivisionStyle} className="Button">
            <p>/</p>
          </div>
          <div style={divMultiplicationStyle} className="Button">
            <p>X</p>
          </div>
        </div>

        <div style={divRowTwoStyle}>
          <div style={divSevenStyle} className="Button">
            <p>7</p>
          </div>
          <div style={divEightStyle} className="Button">
            <p>8</p>
          </div>
          <div style={divNineStyle} className="Button">
            <p>9</p>
          </div>
          <div style={divMinusStyle} className="Button">
            <p>-</p>
          </div>
        </div>

        <div style={divRowThreeStyle}>
          <div style={divFourStyle} className="Button">
            <p>4</p>
          </div>
          <div style={divFiveStyle} className="Button">
            <p>5</p>
          </div>
          <div style={divSixtyle} className="Button">
            <p>6</p>
          </div>
          <div style={divPlusStyle} className="Button">
            <p>+</p>
          </div>
        </div>

        <div style={divRowFourStyle}>
          <div style={divOneStyle} className="Button">
            <p>1</p>
          </div>
          <div style={divTwoStyle} className="Button">
            <p>2</p>
          </div>
          <div style={divThreetyle} className="Button">
            <p>3</p>
          </div>
          <div style={divEqualStyle} className="Button">
            <p>=</p>
          </div>
        </div>

        <div style={divRowFiveStyle}>
          <div style={divZeroStyle} className="Button">
            <p>0</p>
          </div>
          <div style={divDotStyle} className="Button">
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

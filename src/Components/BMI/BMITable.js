import React from "react";

function BMITable(props) {
  const { health } = props;
  let clr1 = health.underweight ? "red" : "black";
  let clr2 = health.healthy ? "green" : "black";
  let clr3 = health.overweight ? "red" : "black";
  let clr4 = health.obese ? "red" : "black";

  const getStyle = (num, clr) => {
    if (num == 1 || num == 3 || num == 4) {
      return { color: clr, transform: `scale(${clr === "red" ? 1.3 : 1})` };
    } else if (num == 2) {
      return { color: clr, transform: `scale(${clr === "green" ? 1.3 : 1})` };
    }
  };
  return (
    <div className="bmi-content-left-div">
      <h4>BMI CHART</h4>
      <table>
        <tr>
          <th>BMI</th>
          <th id="no-right-border">Wight Status</th>
        </tr>
        <tr>
          <td style={getStyle(1, clr1)}>Below 18.5</td>
          <td style={getStyle(1, clr1)} id="no-right-border">
            underweight
          </td>
        </tr>
        <tr>
          <td style={getStyle(2, clr2)}>18.5 - 24.9</td>
          <td style={getStyle(2, clr2)} id="no-right-border">
            healthy
          </td>
        </tr>
        <tr>
          <td style={getStyle(3, clr3)}>25.0 - 29.9</td>
          <td style={getStyle(3, clr3)} id="no-right-border">
            overweight
          </td>
        </tr>
        <tr id="no-bottom-border">
          <td style={getStyle(4, clr4)}>30.0 - above</td>
          <td style={getStyle(4, clr4)} id="no-right-border">
            obese
          </td>
        </tr>
      </table>
    </div>
  );
}

export default BMITable;

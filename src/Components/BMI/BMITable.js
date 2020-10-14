import React from "react";

function BMITable(props) {
    const{ bmi} = props
    var clr1 = (bmi < 18.5 && bmi > 0) ? 'red' : 'black'
    var clr2 = (18.5 <= bmi && bmi <= 24.9) ? "green" : "black"
    var clr3 = (24.9 < bmi && bmi <= 29.9) ? 'red' : "black"
    var clr4 = (29.9 < bmi) ? 'red' : 'black'

  return (
    <div className="bmi-content-left-div">
      <h4>BMI CHART</h4>
      <table>
        <tr>
          <th>BMI</th>
          <th id="no-right-border">Wight Status</th>
        </tr>
        <tr>
          <td style={{color: clr1}}>Below 18.5 {props.bmi}</td>
          <td style={{color: clr1}} id="no-right-border">underweight</td>
        </tr>
        <tr>
          <td style={{color: clr2}}>18.5 - 24.9</td>
          <td style={{color: clr2}} id="no-right-border">healthy</td>
        </tr>
        <tr>
          <td style={{color: clr3}}>25.0 - 29.9</td>
          <td style={{color: clr3}} id="no-right-border">overweight</td>
        </tr>
        <tr id="no-bottom-border">
          <td style={{color: clr4}}>30.0 - above</td>
          <td style={{color: clr4}} id="no-right-border">obese</td>
        </tr>
      </table>
    </div>
  );
}

export default BMITable;

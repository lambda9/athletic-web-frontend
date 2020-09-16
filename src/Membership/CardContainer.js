import React, { Component } from "react";
import CardComp from "./CardComp";
import lg1 from "./logos/lg1.png";
import lg2 from "./logos/lg2.png";
import lg3 from "./logos/lg3.png";
import lg4 from "./logos/lg4.png";
import lg5 from "./logos/lg5.png";
import Title from "../Components/Title";
import { Link } from "react-router-dom";

class CardContainer extends Component {
  state = {
    services: [
      {
        icon: lg1,
        title: "P.T. Yearly",
        info: "Thinking about it! Do it right now.  22,000/Yearly",
      },
      {
        icon: lg2,
        title: "P.T. Six Months",
        info:
          "Get rid of unecessary fat & be in shape with us.   12,000/6 Months",
      },

      {
        icon: lg4,
        title: "Regular Yearly",
        info: "Get personal trainer to always guide you.  8,000/Yearly",
      },
    ],
  };

  render() {
    return (
      <div className="cardCont">
        <Title>Our plans</Title>
        <div className="cardCont-center">
          {this.state.services.map((item) => {
            return (
              <div className="card-holder">
                <CardComp
                  icon={item.icon}
                  title={item.title}
                  info={item.info}
                ></CardComp>
              </div>
            );
          })}
        </div>

        <div className="card-btn">
          <Link className="button-primary">Checkout more >></Link>
        </div>
      </div>
    );
  }
}

export default CardContainer;

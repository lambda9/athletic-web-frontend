import React, { Component } from "react";
import lg1 from "./logos/lg1.png";
import lg2 from "./logos/lg2.png";
import lg3 from "./logos/lg3.png";
import lg4 from "./logos/lg4.png";
import lg5 from "./logos/lg5.png";
import Title from "../Components/Title";
import './ServicesCSS.css'

class ServicesLogo extends Component {
  state = {
    services: [
      {
        icon: <img src={lg1}></img>,
        title: "Body Building",
        info:
          "Thinking about it! Do it right now.",
      },
      {
        icon: <img src={lg2}></img>,
        title: "Weight Loss",
        info:
          "Get rid of unecessary fat & be in shape with us.",
      },

      {
        icon: <img src={lg4}></img>,
        title: "Personal Trainer",
        info:
          "Get personal trainer to always guide you.",
      },
      {
        icon: <img src={lg5}></img>,
        title: "Cardio",
        info:
          "Maintain your Cardiocascular system with our best quipments and trainers",
      },
    ],
  };

  render() {
    return (
        <div className='services'>
        <Title >Our services</Title>
        <div className='services-center'>
        {
            this.state.services.map(item => {
                return (
                    <div>
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    </div>
                )
            })
        }
        </div>
        
        </div>
  
    );
  }

}

export default ServicesLogo;

import React, { Component } from "react";
import Hero from "../Hero";
import Banner from "../Banner";
import Title from "../Title/Title";
import IconSlider from "./IconSlider";
import "./Membership.css";
import bgImg from "../../Images/im6.jpg";
import Circle from "../Shapes/Circle";
import Line from '../Shapes/Line';
import Triangle from '../Shapes/Triangle'
import Square from '../Shapes/Square'

class Membership extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      mHeight: 80,
      plans: [
        {
          plan_id: "pl_1",
          title: "personal training yearly",
          price: "22,000",
          type: "peak",
          description: [
            "personal training",
            "Cardio, Weights & machines",
            "locker rooms with shower",
            "online nutrition",
            "group fitness classes",
            "power half hour circuit training",
            "free t-shirt",
          ],
          duration: "1 year",
        },
        {
          plan_id: "pl_2",
          title: "personal training six months",
          price: "12,000",
          type: "peak",
          description: [
            "personal training",
            "Cardio, Weights & machines",
            "locker rooms with shower",
            "online nutrition",
            "group fitness classes",
            "power half hour circuit training",
            "free t-shirt",
          ],
          duration: "6 months",
        },
        {
          plan_id: "pl_3",
          title: "personal training three month",
          price: "6,500",
          type: "peak",
          description: [
            "personal training",
            "Cardio, Weights & machines",
            "locker rooms with shower",
            "online nutrition",
            "group fitness classes",
            "power half hour circuit training",
            "free t-shirt",
          ],
          duration: "3 months",
        },
        {
          plan_id: "pl_4",
          title: "personal training monthly",
          price: "2,500",
          type: "peak",
          description: [
            "personal training",
            "Cardio, Weights & machines",
            "locker rooms with shower",
            "online nutrition",
            "group fitness classes",
            "power half hour circuit training",
            "free t-shirt",
          ],
          duration: "1 month",
        },
        {
          plan_id: "pl_5",
          title: "regular gym yearly",
          type: "beginner",
          price: "8,000",
          description: [
            "Cardio, Weights & machines",
            "locker rooms with shower",
            "group fitness classes",
            "power half hour circuit training",
            "free t-shirt",
          ],
          duration: "1 year",
        },
        {
          plan_id: "pl_6",
          title: "regular gym six months",
          price: "4,500",
          type: "peak",
          description: [
            "Cardio, Weights & machines",
            "locker rooms with shower",
            "group fitness classes",
            "power half hour circuit training",
            "free t-shirt",
          ],
          duration: "6 months",
        },
        {
          plan_id: "pl_7",
          title: "regular gym three months",
          price: "2,500",
          type: "peak",
          description: [
            "Cardio, Weights & machines",
            "locker rooms with shower",
            "group fitness classes",
            "power half hour circuit training",
            "free t-shirt",
          ],
          duration: "3 months",
        },
        {
          plan_id: "pl_8",
          title: "regular gym one month",
          price: "1,000",
          type: "peak",
          description: [
            "Cardio, Weights & machines",
            "locker rooms with shower",
            "group fitness classes",
            "power half hour circuit training",
            "free t-shirt",
          ],
          duration: "1 month",
        },
      ],
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    console.log(this.state.mHeight, "component");
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (window.innerWidth <= 550) {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        mHeight: 50,
      });
      return;
    }

    this.setState({
      width: window.innerWidth,
        height: window.innerHeight,
        mHeight: 75,
    })
    console.log(this.state.width, this.state.height, this.state.mHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    return (
      <div className="membership-page">
        <Hero bgImg={bgImg}>
          <Banner title="get membership" description="get today" />
        </Hero>

        <div className="plan-container">
          <Line top={-50} left={10} width={10} length={3580} color={"#ececec"} angle={0}/>
          <Line top={-50} left={30} width={10} length={3580} color={"#ececec"} angle={0}/>
          <Triangle top={410} left={595} w1={40} w2={40} w3={80} color={"rgb(253,238,238)"} angle={-35} />
          <Line top={-100} left={600} width={50} length={2000} color={"rgb(253,238,238)"} angle={0}/>
          <Line top={-100} left={700} width={50} length={2000} color={"rgb(253,238,238)"} angle={0}/>
          
          
          <Square top={-70} left={200} width={120} height={80} color={"#c13434"} angle={0}/>
          <Square top={-60} left={210} width={100} height={60} color={"rgb(255, 255, 255)"} angle={0}/>


          <Triangle top={420} left={185} w1={40} w2={40} w3={80} color={"rgb(253,238,238)"} angle={-35} />
          <Circle top={500} left={240} r1={140} r2={140} color={"rgb(238,238,239)"}/>
          <Circle top={509} left={250} r1={120} r2={120} color={"rgb(255, 255, 255)"}/>
          <Circle top={530} left={170} r1={50} r2={50} color={"rgb(238, 238, 239)"}/>
          <Circle top={630} left={210} r1={30} r2={30} color={"rgb(238, 238, 239)"}/>
        
          <Circle top={930} left={300} r1={30} r2={30} color={"rgb(238, 238, 239)"}/>
          <Circle top={930} left={220} r1={50} r2={50} color={"rgb(238, 238, 239)"}/>
        
          <Line top={1000} left={270} width={10} length={1000} color={"rgb(253,238,238)"} angle={0}/>
          <Line top={1000} left={300} width={10} length={1000} color={"rgb(253,238,238)"} angle={0}/>

          <Square top={1900} left={250} width={150} height={600} color={"#459fb6"} angle={0}/>


          <Triangle top={2710} left={195} w1={100} w2={150} w3={200} color={"rgb(253,238,238)"} angle={-35} />
          <Line top={3080} left={500} width={20} length={1000} color={"rgb(253,238,238)"} angle={90}/>

          <Circle top={-100} left={820} r1={1200} r2={1800} color={"rgb(220,222,231)"}/>


          <Square top={130} left={1450} width={120} height={1300} color={"#c13434"} angle={0}/>
          <Square top={140} left={1460} width={100} height={1280} color={"rgb(220,222,231)"} angle={0}/>

        </div>

          <div className="plan-container-center">
            <div className="plan-selectMembership-title">
              <Title>Select membership plan</Title>
            </div>
            <div className="plan-card-container">
              {this.state.plans.map((plan) => {
                return <IconSlider item={plan} />;
              })}
            </div>
          </div>
      </div>
    );
  }
}

export default Membership;
// <Banner title="get membership" description="get today" />

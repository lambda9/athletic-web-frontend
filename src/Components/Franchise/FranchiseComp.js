import React from "react";
import Title from "../Title/Title";
import "./FranchiseComp.css";
import "../ContactUs/ContactUs.css";
import { BiWallet, FcProcess, FaHeadset } from "react-icons/all";
import FranchiseContForm from "./FranchiseContForm";
import temp from '../../Images/Franchise/support.png'
function FranchiseComp(props) {
  return (
    <div className="franchise-main-comp">
      {/* <div className="franchise-head-div">
        <Title>Own your own franchise today</Title>

        <span>
          The fitness industry is constantly growing which means success for our
          franchisees. It also gives us a meaningful purpose to change the lives
          in our communities for the better.
        </span>
      </div> */}

      <div className="franchise-main-content-div">
        <div className="franchise-feature-main-div">
          <div className="franchise-feature-main-div-overlay">
            <div className="franchise-feature-div">
              <h1>$2.2 Billion</h1>
              <div>Revenue in first segment</div>
            </div>
            <div className="franchise-feature-div">
              <h1>1.4%</h1>
              <div>expected growth rate for 2020-2024</div>
            </div>
            <div className="franchise-feature-div">
              <h1>104 Million</h1>
              <div>active members</div>
            </div>
          </div>
        </div>
        <div className="franchise-content-div">
          <div className="franchis-low-cost">
            <div>
              <BiWallet className="franchise-get-started-icon" />
              <h1>Low Cost Investment</h1>
              <p>
                We offers very affordable franchise and monthly fees versus
                other industries.
              </p>
            </div>
            <img
              src="https://cdn.pixabay.com/photo/2018/09/12/11/18/scale-3671883_960_720.jpg"
              width="600"
              height="400"
            />
          </div>
          <div className="franchise-simple-process">
            <img
              src="https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_960_720.jpg"
              width="600"
              height="400"
            />
            <div>
              <FcProcess className="franchise-get-started-icon"  fill='black'/>
              <h1>Simple Process</h1>
              <p>
                We’ll guide you through every step to becoming a healthy, happy
                owner.
              </p>
            </div>
          </div>
          <div className="franchise-360-support">
            <div>
              <FaHeadset className="franchise-get-started-icon" />
              <h1>360 Support</h1>
              <p>
                We’re here for you through the life of your club with customized
                support for each stage of your growth.
              </p>
            </div>
            <img src= {temp} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FranchiseComp;

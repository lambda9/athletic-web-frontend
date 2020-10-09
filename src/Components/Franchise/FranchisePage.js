import React, { Component } from "react";
import FranchiseContForm from "./FranchiseContForm";
import "./Franchise.css";

export class FranchisePage extends Component {
  render() {
    return (
      <div>
        <div className="franchise-header-div">
          <div className="franchise-header-text">Own Our Franchise</div>
        </div>
        <div className="franchise-body-header-div">
          <div className="franchise-body-header-text">
            <span>
              <h1>
                Join the Most Established and Strongest Performing Fitness
                Franchise Worldwide
              </h1>
            </span>
            <span>
              We’re turning passion into profits for our franchisees and
              building healthy communities for our members.
            </span>
          </div>
        </div>
        <div className="franchise-body-card-div">
          <div className="franchise-body-card-item">
            <img
              className="franchise-body-card-logo"
              src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_100,h_100/https://www.anytimefitness.com/wp-content/uploads/2019/06/1.png"
            ></img>
            <h2>Largest presence of any fitness franchise</h2>
            <span>
              Anytime Fitness is the first franchise on all 7 continents, with
              over 4,700 territories sold and 4 million members worldwide.
            </span>
          </div>
          <div className="franchise-body-card-item">
            <img
              className="franchise-body-card-logo"
              src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_100,h_100/https://www.anytimefitness.com/wp-content/uploads/2019/06/1.png"
            ></img>
            <h2>Largest presence of any fitness franchise</h2>
            <span>
              Anytime Fitness is the first franchise on all 7 continents, with
              over 4,700 territories sold and 4 million members worldwide.
            </span>
          </div>
          <div className="franchise-body-card-item">
            <img
              className="franchise-body-card-logo"
              src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_100,h_100/https://www.anytimefitness.com/wp-content/uploads/2019/06/1.png"
            ></img>
            <h2>Largest presence of any fitness franchise</h2>
            <span>
              Anytime Fitness is the first franchise on all 7 continents, with
              over 4,700 territories sold and 4 million members worldwide.
            </span>
          </div>
          <div className="franchise-body-card-item">
            <img
              className="franchise-body-card-logo"
              src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_100,h_100/https://www.anytimefitness.com/wp-content/uploads/2019/06/1.png"
            ></img>
            <h2>Largest presence of any fitness franchise</h2>
            <span>
              Anytime Fitness is the first franchise on all 7 continents, with
              over 4,700 territories sold and 4 million members worldwide.
            </span>
          </div>
        </div>
        <div className="franchise-form-header">
          <h2>Take The First Step Today</h2>
          <span>
            Tell us more about yourself or give us a call at (800)
            704-???? to talk more about franchising opportunities.
          </span>
        </div>

        <div className="franchise-form-container">
          <FranchiseContForm />
        </div>
      </div>
    );
  }
}

export default FranchisePage;

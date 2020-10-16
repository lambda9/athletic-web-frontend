import React from "react";
import PTForYouCard from "./PTForYouCard";

function PTForYou() {
  return (
    <div className="pt-foryou">
      <div>training plan for you</div>
      <div id="bottom-blue-line" />
      <div className="pt-foryou-card-div">
        <PTForYouCard
          heading={"Areas of Focus"}
          description={
            "Your needs, interests and goals are the most important part of your training program. Consider where you want to focus and we’ll show you how to get there."
          }
        />
        <PTForYouCard
          heading={"Coaching Styles"}
          description={
            "Do you need a personal cheerleader, drill sergeant or motivational coach? Choose a coaching style that fits you to get the most out of your training time."
          }
        />
        <PTForYouCard
          heading={"Accountability"}
          description={
            "Daily, weekly and monthly, your goals keep you accountable and give you milestones to work toward. We’ll use them to both define your training approach and track your progress."
          }
        />
      </div>
    </div>
  );
}

export default PTForYou;

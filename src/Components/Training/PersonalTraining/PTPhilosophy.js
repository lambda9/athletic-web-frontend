import React from "react";
import MiniTitle from "../../Title/MiniTitle";

function PTPhilosophy() {
  return (
    <div className="pt-philosophy-main-div">
      <div id="linear-white-grad-rtl" className='pt-philosophy-content'>
        <div className="pt-philosophy-text">
          <MiniTitle title={"our philosophy"} bottomLineStyle={{backgroundColor: "#1ca9c9"}}  />
          <p>
            When you understand how the body works, nourish it with the right
            food and exercise, you will see better results – and you will live a
            healthy life. We practice this philosophy through Know it. Nourish
            it. Move it.℠
          </p>
        </div>
      </div>
    </div>
  );
}

export default PTPhilosophy;

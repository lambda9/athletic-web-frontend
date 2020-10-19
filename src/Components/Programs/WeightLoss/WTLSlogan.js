import React from "react";
import { Link } from "react-router-dom";

function WTLSlogan() {
  return (
    <div
      className="wtl-slogan-div"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="600"
    >
      <div>
        Our equipments, training processes and your dedication is more than
        enough to make you fit and in good shape. Why wait? {}
        <Link to="/membership" className="pt-bbold-link" id="slogan-link">
          Let's get started.
        </Link>
      </div>
      <p>
        *If your are suffering from severe underweight or overweight, We
        strongly recommend you to see a Doctor first, as you maybe suffering
        from any kind of disease.
      </p>
    </div>
  );
}

export default WTLSlogan;

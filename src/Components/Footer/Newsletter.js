import React, { Component } from "react";
import "./Footer.css";

const Newsletter = () => {

  return (

    <div className = "footer-newsletter">
      <div className = "newsletter-text">
        Get Latest Updates <br/>
        Subscribe to our Newsletter 
      </div>
      <div className = "newsletter-input">
        <input 
          type = "text"
          className = "newsletter-input-field" 
          placeholder = "Enter your mail here"
        />
        <button className = "newsletter-button">Subscribe</button>
      </div>
    </div>

  )

}

export default Newsletter;
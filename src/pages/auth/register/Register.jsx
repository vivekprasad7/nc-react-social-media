import React from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import card from "../../../assets/animations/card.json";

import Lottie from "lottie-react";
import { Type } from "../../../components/type/Type";

export const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="register-page">
      <div className="register">
        <div className="register-main">
          <div className="register-text">
            <h1 className="site-name">
              Cardz<span className="orange">.</span>
            </h1>
            <p>
              Social Media App From the
              <span className="gradient"> Future!</span>
            </p>
            <Type />
          </div>

          <div className="register-buttons">
            <div className="btn-unit gradient">
              <button
                className="gradient r-btn"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </div>
            <div className="btn-unit gradient">
              <button
                className="gradient r-btn"
                onClick={() => navigate("/login")}
              >
                Log In
              </button>
            </div>
          </div>
        </div>

        <div className="register-media">
          <div className="register-animation">
            <Lottie animationData={card} />
          </div>
        </div>
      </div>
    </div>
  );
};

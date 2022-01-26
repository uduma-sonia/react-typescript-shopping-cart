import React from "react";
import "./Login.styles.css";

export const Login: React.FC<{}> = () => {
  return (
    <div className="login-container">
      <div className="overlay-1"></div>
      <div className="overlay-2"></div>

      <div className="center height-3-4">
        <div>
          <div className="mb-5">
            <h2>Welcome to Tap House</h2>
            <p className="fs-xs color-gray">
              Register your name to start shopping
            </p>
          </div>

          <div className="form-group">
            <label className="fs-sm fw-semibold color-gray">Name</label>
            <br />
            <input type="text" className="form-input p-2" />
          </div>

          <div className="mt-3">
            <button className="login-btn full-width pt-2 pb-2 fw-semibold cursor-pointer">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

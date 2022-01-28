import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.styles.css";

export const Login: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleLogin = () => {
    if (!name) {
      setError(true);
    } else {
      window.localStorage.setItem("_name", JSON.stringify(name));
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <div className="overlay-1"></div>
      <div className="overlay-2"></div>
      <div className="overlay-3"></div>

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
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-input p-2"
              style={error ? { borderColor: "#ed0505" } : {}}
            />
          </div>

          <div className="mt-3">
            <button
              className="login-btn full-width pt-2 pb-2 fw-semibold cursor-pointer"
              onClick={() => handleLogin()}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

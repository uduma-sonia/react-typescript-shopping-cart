import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const CartNavbar: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");

  useEffect(() => {
    if (window !== undefined) {
      if (localStorage.getItem("_name") === null) {
        navigate("/login");
      } else {
        const userName = JSON.parse(window.localStorage.getItem("_name") || "");
        setName(userName);
      }
    }
  }, []);
  return (
    <div className="height-3">
      <div className="container mx-auto px-5 full-height flex j-between items-center">
        <h1 className="color-main fw-medium fs-md logo">Tap House</h1>

        <div className="flex items-center">
          <p className="fs-xs mr-3 fw-semibold">Need Help?</p>

          <button className="border-0 fs-sm-2 fw-semibold user-name">
            Hi, <span className="capitalize">{name}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

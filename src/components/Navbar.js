import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };
  return (
    <>
      <div className="nav">
        <div className="left">
          <Link to="/" className="link">
            <h1>skyX</h1>
          </Link>
        </div>
        <div className="search">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </form>
        </div>
        <div className="right">
          <Link to={`/country/indian`} className="link">
            <div>India</div>
          </Link>
          <Link to={`/country/american`} className="link">
            <div>America</div>
          </Link>
          <Link to={`/country/british`} className="link">
            <div>British</div>
          </Link>
          <Link to={`/country/chinese`} className="link">
            <div>Chinese</div>
          </Link>
          <Link to={`/country/thai`} className="link">
            <div>Thai</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

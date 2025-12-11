import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ setsearch }) => {
  const navigate = useNavigate();
  const location = useLocation(); // hook use kiya to get the current location

  return (
    <>
      <div className="nav mt-3">
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {setsearch("nature")
            navigate("/")
          }}
        >
          Nature
        </div>
        <div
          className="button btn btn-outline-primary mx-3"
          onClick={() => {setsearch("Travel")
            navigate("/")
          }}
        >
          Travel
        </div>
        <div
          className="button btn btn-outline-info mx-3"
          onClick={() => {setsearch("City")
            navigate("/")
          }}
        >
          City
        </div>
        <div
          className="button btn btn-outline-secondary mx-3"
          onClick={() => {setsearch("Car")
            navigate("/")
          }}
        >
          Car
        </div>
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {setsearch("punjab")
            navigate("/")
          }}
        >
          Punjab
        </div>
        <div
          className="button btn btn-outline-light mx-3"
          onClick={() => {setsearch("Animals")
            navigate("/")
          }}
        >
          Animals
        </div>
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {setsearch("Technology")
            navigate("/")
          }}
        >
          Technology
        </div>
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {setsearch("Stock Market")
            navigate("/")
          }}
        >
          Stock Market
        </div>
        <div
          className="button btn btn-outline-primary mx-3"
          onClick={() => {setsearch("India")
            navigate("/")
          }}
        >
          India
        </div>
        <div
          className="button btn btn-outline-info mx-3"
          onClick={() => {setsearch("Dubai")
            navigate("/")
          }}
        >
          Dubai
        </div>
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {setsearch("Gaming")
            navigate("/")
          }}
        >
          Gaming
        </div>
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {setsearch("crypto")
            navigate("/")
          }}
        >
          Crypto
        </div>
        <div
          className="button btn btn-outline-info mx-3"
          onClick={() => {setsearch("Laptop")
            navigate("/")
          }}
        >
          Laptop
        </div>

        {/* condtional rendering krvai hai saved / home btn pe*/}
        {location.pathname === "/saved" ? (
          <div
            className="button btn btn-primary mx-3"
            onClick={() => navigate("/")}
          >
            Home
          </div>
        ) : (           //path saved hai to home ka btn dikhao nhi to saved ko dikhao
          <div
            className="button btn btn-primary mx-3"
            onClick={() => navigate("/saved")}
          >
            Saved
          </div>
        )}
      </div>

      <div className="container my-4" style={{ maxWidth: "780px", width: "100%" }}>


      {location.pathname=== '/' && (    //home pr honge tbhi search bar dikhao baaki mt dikaho
        <div className="mb-3">
          <input
            type="email"
            className="form-control bg-dark text-white"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setsearch(e.target.value)}
            onClick={() => setsearch("nature")} // Fixed typo here (setSearch -> setsearch)
          />
        </div>
  )}
      </div>
    </>
  );
};

export default Navbar;

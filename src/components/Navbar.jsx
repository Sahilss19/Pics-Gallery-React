import React from "react";

const Navbar = ({setsearch}) => {
  return (
    <>
      <div className="nav mt-3">
        <div className="button btn btn-outline-warning mx-3" 
        onClick={()=>setsearch("nature")} >Nature</div>
        <div className="button btn btn-outline-primary mx-3" 
        onClick={()=>setsearch("Travel")} >Travel</div>
        <div className="button btn btn-outline-info mx-3" 
        onClick={()=>setsearch("City")} >City</div>
        <div className="button btn btn-outline-secondary mx-3" 
        onClick={()=>setsearch("Car")} >Car</div>
        <div className="button btn btn-outline-warning mx-3" 
        onClick={()=>setsearch("punjab")} >punjab</div>
        <div className="button btn btn-outline-light mx-3" 
        onClick={()=>setsearch("Animals")} >Animals</div>
        <div className="button btn btn-outline-warning mx-3" 
        onClick={()=>setsearch("Technology")} >Technology</div>
        <div className="button btn btn-outline-warning mx-3" 
        onClick={()=>setsearch("Stock Market")} >
          Stock Market
        </div>
        <div className="button btn btn-outline-primary mx-3" 
        onClick={()=>setsearch("India")} >India</div>
        <div className="button btn btn-outline-info mx-3" 
        onClick={()=>setsearch("Dubai")} >Dubai</div>

<div className="button btn btn-outline-warning mx-3" 
onClick={()=>setsearch("gaminf")} >Gaming</div>
<div className="button btn btn-outline-warning mx-3" 
onClick={()=>setsearch("crypto")} >
  crpto
</div>
<div className="button btn btn-outline-info mx-3" 
onClick={()=>setsearch("Laptop")} >Laptop</div>
<div className="button btn btn-primary mx-3" 

        onClick={()=>setsearch("Saved")} >Saved</div>
      </div>

      <div className="container my-4" style={{ width: "780px" }}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control bg-dark text-white"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setsearch(e.target.value)} 
            onclick={()=>setSearch("nature")} 
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;

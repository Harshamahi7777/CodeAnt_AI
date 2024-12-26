import React, { useState } from "react";
import { Link } from "react-router-dom";

const ButtonComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const icons = [
    "/imports/home.png", // Icon for button 1
    "/imports/code.png", // Icon for button 2
    "/imports/cloud.png", // Icon for button 3
    "/imports/book.png", // Icon for button 4
    "/imports/settings.png", // Icon for button 5
  ];

  const labels = ["Repositories", "AI Code Review", "Cloud Security", "How to Use", "Settings"];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle active state
  };

  return (
    <div>
      {icons.map((icon, index) => (
        <Link to="#" key={index} style={{textDecoration:"none"}}>
          <button
            type="button"
            className="btn btn-primary btn m-1"
            style={{
              width: "100%",
              borderRadius: "0.5em",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              height: "2.5em",
              backgroundColor:
                index === 0 
                  ? "#007bff"
                  : activeIndex === index
                  ? "#007bff" 
                  : "white", 
              color:
                index === 0 
                  ? "white"
                  : activeIndex === index
                  ? "white" 
                  : "#414651", 
              border: "2px solid white",
              cursor: "pointer",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
            onClick={() => handleClick(index)} 
          >
            <img
              src={icon}
              alt={`icon-${index}`}
              style={{
                marginLeft: "1em",
                width: "20px",
                height: "20px",
                filter:
                  index === 0 
                    ? "invert(1)"
                    : activeIndex === index
                    ? "invert(1)" 
                    : "invert(0)", 
                transition: "filter 0.3s ease", // Smooth transition for the icon color
              }}
            />

            <p style={{ marginLeft: "0.5em", marginTop: "1em" }}>{labels[index]}</p>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ButtonComponent;

import React, { useState } from "react";
import HogDetails from "./HogDetails";

function HogCard({ hog }) {
  // Declare two pieces of state using the "useState" hook
  const [isHidden, setIsHidden] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Define a function that toggles the "showDetails" state
  function handleDetailsClick() {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  }

  // Hide the hog card if "isHidden" state is true
  if (isHidden) return null;

  // Destructure the "name", "specialty", and "image" properties from the "hog" prop
  const { name, specialty, image } = hog;

  // Render the hog card
  return (
    <div className="ui card eight wide column pigTile">
      <div className="image">
        <img src={image} alt="hogPic" />
      </div>
      <div className="content">
        <h3 className="header">{name}</h3>
        <div className="description">Specialty: {specialty}</div>
      </div>
      <div className="extra content">
        {/* Conditionally render the "HogDetails" component based on the "showDetails" state */}
        {showDetails ? <HogDetails hog={hog} /> : null}

        {/* Render a button that toggles the "showDetails" state when clicked */}
        <button className="ui button" onClick={handleDetailsClick}>
          {showDetails ? "Less Info" : "More Info"}
        </button>

        {/* Render a button that sets the "isHidden" state to true when clicked */}
        <button className="ui button" onClick={() => setIsHidden(true)}>
          Hide Me{" "}
          <span role="img" aria-label="snout">
            🐽
          </span>
        </button>
      </div>
    </div>
  );
}

export default HogCard;

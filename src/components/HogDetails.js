import React from 'react'

function HogDetails({ hog }) {
  // Destructure the "greased", "weight", and "highest medal achieved" properties from the "hog" prop
  const { greased, weight, "highest medal achieved": medal } = hog

  // Render the hog's additional details
  return (
    <div className="description">
      {/* Use a ternary operator to display whether the hog is greased or not */}
      <strong>{greased ? 'Greased' : 'Nongreased'}</strong>
      <p>
        {/* Display the highest medal achieved by the hog */}
        Highest medal achieved: <strong>{medal}</strong>
      </p>
      <p>
        {/* Display the hog's weight as a ratio to a specific type of refrigerator */}
        Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator
        with Thru-the-Door Ice and Water: <strong>{weight}</strong>
      </p>
    </div>
  )
}

export default HogDetails;


// The "HogDetails" component is defined as a functional component that takes a single "hog" prop.

// The "hog" prop is destructured to get the "greased", "weight", and "highest medal achieved" properties.

// The component uses a ternary operator to display whether the hog is greased or not. If the hog is greased, 
// the component displays the text "Greased". If the hog is not greased, the component displays the text "Nongreased".

// The component displays the hog's highest medal achieved by accessing the "medal" property.

// The component displays the hog's weight as a ratio to a specific type of refrigerator by accessing the "weight" property.
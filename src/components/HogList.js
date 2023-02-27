import React from "react";
import HogCard from './HogCard'

function HogList({ hogs }) {
  // Render a list of hog cards using the "hogs" prop
  return (
    <div className="ui three stackable cards">
      {hogs.map(hog => (
        <HogCard
          key={hog.name}
          hog={hog}
        />
      ))}
    </div>
  );
}

export default HogList;


//The "HogList" component is responsible for rendering a list of hog cards, using the "hogs" prop that is passed 
// down from the parent component. The component maps over the array of hogs and renders a "HogCard" 
// component for each hog, passing the "hog" prop to the "HogCard" component.

// The "key" attribute is also used to help React keep track of the individual hog components as they're added or removed.

// The "HogList" component uses the "ui three stackable cards" class to render the hog cards in a grid layout.
import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogList from "./HogList";

import hogs from "../porkers_data";

function App() {

  // Define the "showGreased" and "sortBy" states using the "useState" hook
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  // Filter and sort the "hogs" array based on the "showGreased" and "sortBy" states
  const hogsToDisplay = hogs
    .filter((hog) => (showGreased ? hog.greased : true))
    .sort((hog1, hog2) => {
      if (sortBy === "weight") {
        return hog1.weight - hog2.weight;
      } else {
        return hog1.name.localeCompare(hog2.name);
      }
    });

  // Render the UI of the "App" component
  return (
    <div className="ui grid container App">
      <div className="sixteen wide column centered">
        <Nav />
      </div>
      <div className="sixteen wide column centered">
        <Filter
          showGreased={showGreased}
          onChangeShowGreased={setShowGreased}
          sortBy={sortBy}
          onChangeSortBy={setSortBy}
        />
      </div>
      <div className="sixteen wide column centered">
        <HogList hogs={hogsToDisplay} />
      </div>
    </div>
  );
}

export default App;

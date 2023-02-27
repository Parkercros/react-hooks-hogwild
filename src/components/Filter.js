import React from 'react'

function Filter({
  sortBy,
  onChangeSortBy,
  showGreased,
  onChangeShowGreased
}) {

  // Define a callback function that is called when the user changes the "Sort by" select input
  function handleChangeSortBy(event) {
    // Call the "onChangeSortBy" prop function and pass in the new selected value
    onChangeSortBy(event.target.value)
  }
  
  // Define a callback function that is called when the user toggles the "Greased Pigs Only" checkbox
  function handleToggleGreased(event) {
    // Call the "onChangeShowGreased" prop function and pass in the new checked state
    onChangeShowGreased(event.target.checked)
  }

  // Render the filter UI
  return (
    <div className="filterWrapper">
      <div className="ui menu">
        <div className="ui item">
          <label>Sort by </label>
        </div>
        <div className="ui item">
          <select
            className="ui selection dropdown"
            name="sort"
            onChange={handleChangeSortBy}
            value={sortBy}
          >
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
        <div className="ui item">
          <label>Greased Pigs Only?</label>
        </div>
        <div className="ui item">
          <input
            className="ui toggle checkbox"
            checked={showGreased}
            onChange={handleToggleGreased}
            type="checkbox"
          />
        </div>
      </div>
    </div>
  )
}

export default Filter;



// The "Filter" component is defined as a functional component that takes several props: "sortBy", "onChangeSortBy", "showGreased", and "onChangeShowGreased".

// The "handleChangeSortBy" function is defined as a callback function that is called when the user changes the "Sort by" select input. This function updates 
// the "sortBy" state by calling the "onChangeSortBy" prop function and passing in the new selected value.

// The "handleToggleGreased" function is defined as a callback function that is called when the user toggles the "Greased Pigs Only" checkbox. 
// This function updates the "showGreased" state by calling the "onChangeShowGreased" prop function and passing in the new checked state.

// The component renders a UI that includes a "Sort by" label, a "Sort by" select input, a "Greased Pigs Only" label, and a "Greased Pigs Only" 
// checkbox. The "Sort by" select input uses the "sortBy" prop to set the selected value, and the "Greased Pigs Only" checkbox uses the "showGreased" 
// prop to set the checked state. The "handleChangeSortBy" and "handleToggleGreased" functions are called when the "Sort by" select input and the "Greased Pigs Only" 
// checkbox are changed, respectively.
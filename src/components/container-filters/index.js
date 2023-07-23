import React, { useState } from "react";
import { clearSearch } from "../container-header";

function Filter(props) {
  const [inputValue, setInputValue] = useState("");
  const [checkedItems, setCheckedItems] = useState({});

  const { getFilterSearch } = props;

  const clearSearchValueAll = () => {
    getFilterSearch("");
    setInputValue("");

    let items = document.querySelectorAll('input[type="checkbox"]');

    for (let i = 0; i < items.length; i++) {
      if (items[i].type === "checkbox" && items[i].checked === true)
        items[i].checked = false;
    }

    clearSearch();
  };

  function clearSearchValue(value1, value2) {
    let items1 = document.getElementsByName(value1);
    let items2 = document.getElementsByName(value2);

    for (let i = 0; i < items1.length; i++) {
      if (items1[i].type === "checkbox" && items1[i].checked === true)
        items1[i].checked = false;
    }

    for (let i = 0; i < items2.length; i++) {
      if (items2[i].type === "checkbox" && items2[i].checked === true)
        items2[i].checked = false;
    }
  }

  const handleClick = (event) => {
    const { name, value, checked } = event.target;

    setCheckedItems((prev) => ({
      ...prev,
      [value]: checked,
    }));

   // console.log(value + "  " + name);

    if (name === "Gender") {
      clearSearchValue("Species", "Location");

      let items = document.querySelectorAll('input[type="checkbox"]');
      let selectedlist = ["GENDER"];

      for (let i = 0; i < items.length; i++) {
        if (items[i].type === "checkbox" && items[i].checked === true)
          selectedlist.push(items[i].value);
      }

      getFilterSearch(selectedlist);
    }

    if (name === "Species") {
      clearSearchValue("Gender", "Location");

      let items = document.querySelectorAll('input[type="checkbox"]');
      let selectedlist = ["SPECIES"];

      for (let i = 0; i < items.length; i++) {
        if (items[i].type === "checkbox" && items[i].checked === true)
          selectedlist.push(items[i].value);
      }

      getFilterSearch(selectedlist);
    }

    if (name === "Location") {
      clearSearchValue("Gender", "Species");

      let items = document.querySelectorAll('input[type="checkbox"]');
      let selectedlist = ["LOCATION"];

      for (let i = 0; i < items.length; i++) {
        if (items[i].type === "checkbox" && items[i].checked === true)
          selectedlist.push(items[i].value);
      }

      getFilterSearch(selectedlist);
    }
  };

  return (
    <div className="container-wrapper">
      <div className="container-header">
        <h2>Filters</h2>
        <div className="clear-filters">
          <div className="ais-ClearRefinements">
            <div className="ais-SearchBox">
              <button
                type="reset"
                hidden=""
                className="ais-ClearRefinements-button ais-ClearRefinements-button--disabled"
                title="Clear Refinements."
                onClick={clearSearchValueAll}
              >
                <svg
                  className="ais-SearchBox-resetIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                >
                  <g fill="none" fillRule="evenodd" opacity=".4">
                    <path d="M0 0h11v11H0z" />
                    <path
                      fill="#000"
                      fillRule="nonzero"
                      d="M8.26 2.75a3.896 3.896 0 1 0 1.102 3.262l.007-.056a.49.49 0 0 1 .485-.456c.253 0 .451.206.437.457 0 0 .012-.109-.006.061a4.813 4.813 0 1 1-1.348-3.887v-.987a.458.458 0 1 1 .917.002v2.062a.459.459 0 0 1-.459.459H7.334a.458.458 0 1 1-.002-.917h.928z"
                    />
                  </g>
                </svg>
                Clear filters
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-body">
        <div className="ais-Panel">
          <div className="ais-Panel-header">Gender</div>
          <div className="ais-Panel-body">
            <div className="ais-RefinementList">
              <ul className="ais-RefinementList-list">
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Gender"
                      checked={checkedItems["Gender"]}
                      value="Male"
                      id="Male"
                      onClick={handleClick}
                    />
                    <span className="ais-RefinementList-labelText">Male</span>
                  </label>
                </li>
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Gender"
                      checked={checkedItems["Gender"]}
                      value="Female"
                      id="Female"
                      onClick={handleClick}
                    />
                    <span className="ais-RefinementList-labelText">Female</span>
                  </label>
                </li>
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Gender"
                      checked={checkedItems["Gender"]}
                      value="unknown"
                      id="unknown"
                      onClick={handleClick}
                    />
                    <span className="ais-RefinementList-labelText">
                      unknown
                    </span>
                  </label>
                </li>
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Gender"
                      checked={checkedItems["Gender"]}
                      value="Genderless"
                      id="Genderless"
                      onClick={handleClick}
                    />
                    <span className="ais-RefinementList-labelText">
                      Genderless
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/*-Species*/}

      <div className="container-body">
        <div className="ais-Panel">
          <div className="ais-Panel-header">Species</div>

          <div className="ais-Panel-body">
            <div className="ais-RefinementList">
              <ul className="ais-RefinementList-list">
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Species"
                      checked={checkedItems["Species"]}
                      value="Human"
                      id="Human"
                      onClick={handleClick}
                    />
                    <span className="ais-RefinementList-labelText">Human</span>
                  </label>
                </li>
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Species"
                      checked={checkedItems["Species"]}
                      value="Alien"
                      id="Alien"
                      onClick={handleClick}
                    />
                    <span className="ais-RefinementList-labelText">Alien</span>
                  </label>
                </li>
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Species"
                      checked={checkedItems["Species"]}
                      value="Humanoid"
                      id="Humanoid"
                      onClick={handleClick}
                    />

                    <span className="ais-RefinementList-labelText">
                      Humanoid
                    </span>
                  </label>
                </li>
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Species"
                      checked={checkedItems["Species"]}
                      value="Animal"
                      id="Animal"
                      onClick={handleClick}
                    />

                    <span className="ais-RefinementList-labelText">Animal</span>
                  </label>
                </li>
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Species"
                      checked={checkedItems["Species"]}
                      value="Robot"
                      id="Robot"
                      onClick={handleClick}
                    />

                    <span className="ais-RefinementList-labelText">Robot</span>
                  </label>
                </li>
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Species"
                      checked={checkedItems["Species"]}
                      value="Cronenberg"
                      id="Cronenberg"
                      onClick={handleClick}
                    />

                    <span className="ais-RefinementList-labelText">
                      Cronenberg
                    </span>
                  </label>
                </li>
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Species"
                      checked={checkedItems["Species"]}
                      value="Mythological Creature"
                      id="Mythological Creature"
                      onClick={handleClick}
                    />

                    <span className="ais-RefinementList-labelText">
                      Mythological Creature
                    </span>
                  </label>
                </li>
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Species"
                      checked={checkedItems["Species"]}
                      value="Disease"
                      id="Disease"
                      onClick={handleClick}
                    />

                    <span className="ais-RefinementList-labelText">
                      Disease
                    </span>
                  </label>
                </li>
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Species"
                      checked={checkedItems["Species"]}
                      value="Poopybutthole"
                      id="Poopybutthole"
                      onClick={handleClick}
                    />

                    <span className="ais-RefinementList-labelText">
                      Poopybutthole
                    </span>
                  </label>
                </li>
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Species"
                      checked={checkedItems["Species"]}
                      value="unknown"
                      id="unknown"
                      onClick={handleClick}
                    />

                    <span className="ais-RefinementList-labelText">
                      unknown
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/*-Location*/}

      <div className="container-body">
        <div className="ais-Panel">
          <div className="ais-Panel-header">Location</div>
          <div className="ais-Panel-body">
            <div className="ais-RefinementList">
              <ul className="ais-RefinementList-list">
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Location"
                      checked={checkedItems["Location"]}
                      value="Earth (Replacement Dimension)"
                      id="Earth (Replacement Dimension)"
                      onClick={handleClick}
                    />

                    <span className="ais-RefinementList-labelText">
                      Earth (Replacement Dimension)
                    </span>
                  </label>
                </li>
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Location"
                      checked={checkedItems["Location"]}
                      value="Citadel of Ricks"
                      id="Citadel of Ricks"
                      onClick={handleClick}
                    />

                    <span className="ais-RefinementList-labelText">
                      Citadel of Ricks
                    </span>
                  </label>
                </li>
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Location"
                      checked={checkedItems["Location"]}
                      value="Interdimensional Cable"
                      id="Interdimensional Cable"
                      onClick={handleClick}
                    />

                    <span className="ais-RefinementList-labelText">
                      Interdimensional Cable
                    </span>
                  </label>
                </li>
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Location"
                      checked={checkedItems["Location"]}
                      value="Earth (C-137)"
                      id="Earth (C-137)"
                      onClick={handleClick}
                    />

                    <span className="ais-RefinementList-labelText">
                      Earth (C-137)
                    </span>
                  </label>
                </li>
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Location"
                      checked={checkedItems["Location"]}
                      value="unknown"
                      id="unknown"
                      onClick={handleClick}
                    />

                    <span className="ais-RefinementList-labelText">
                      unknown
                    </span>
                  </label>
                </li>
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Location"
                      checked={checkedItems["Location"]}
                      value="Snake Planet"
                      id="Snake Planet"
                      onClick={handleClick}
                    />

                    <span className="ais-RefinementList-labelText">
                      Snake Planet
                    </span>
                  </label>
                </li>
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Location"
                      checked={checkedItems["Location"]}
                      value="Planet Squanch"
                      id="Planet Squanch"
                      onClick={handleClick}
                    />

                    <span className="ais-RefinementList-labelText">
                      Planet Squanch
                    </span>
                  </label>
                </li>
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Location"
                      checked={checkedItems["Location"]}
                      value="Anatomy Park"
                      id="Anatomy Park"
                      onClick={handleClick}
                    />

                    <span className="ais-RefinementList-labelText">
                      Anatomy Park
                    </span>
                  </label>
                </li>
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Location"
                      checked={checkedItems["Location"]}
                      value="Nuptia 4"
                      id="Nuptia 4"
                      onClick={handleClick}
                    />

                    <span className="ais-RefinementList-labelText">
                      Nuptia 4
                    </span>
                  </label>
                </li>
                <li className="ais-RefinementList-item">
                  <label className="ais-RefinementList-label">
                    <input
                      type="checkbox"
                      name="Location"
                      checked={checkedItems["Location"]}
                      value="Heist-Con"
                      id="Heist-Con"
                      onClick={handleClick}
                    />

                    <span className="ais-RefinementList-labelText">
                      Heist-Con
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;

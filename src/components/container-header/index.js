import React from "react";

let myObject;

export const clearSearch = () => {
  myObject.publicFunction();
};

function Header(props) {
  const [inputValue, setInputValue] = React.useState("");
  const { getHeaderSearch } = props;

  const handleSearchValue = (e) => {
    e.preventDefault();
    getHeaderSearch(inputValue);
  };

  const clearSearchValues = () => {
    getHeaderSearch("");
    setInputValue("");
  };

  myObject = {
    publicFunction: function () {
      clearSearchValues();
    },
  };

  return (
    <header className="header">
      <p className="header-title">Wubba Lubba Dub Dub.</p>
      <div className="ais-SearchBox">
        <form
          noValidate=""
          className="ais-SearchBox-form"
          action=""
          role="search"
        >
          <input
            type="search"
            placeholder="Name,
      Species,
      Location-name,
      Status,
      Gender, 
      Type,
      Origin-name"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
            spellCheck="false"
            required=""
            maxLength="512"
            className="ais-SearchBox-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button
            type="submit"
            title="Submit your search query."
            className="ais-SearchBox-submit"
            onClick={(e) => {
              handleSearchValue(e);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 18 18"
            >
              <g
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.67"
                transform="translate(1 1)"
              >
                <circle cx="7.11" cy="7.11" r="7.11"></circle>
                <path d="M16 16l-3.87-3.87"></path>
              </g>
            </svg>
          </button>
          <button
            type="reset"
            title="Clear the search query."
            className="ais-SearchBox-reset"
            hidden=""
            onClick={() => clearSearchValues()}
          >
            <svg
              className="ais-SearchBox-resetIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              width="10"
              height="10"
            >
              <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path>
            </svg>
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;

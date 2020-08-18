import React from "react";
import PropTypes from "prop-types";
import "./SearchInput.css";

function SearchInput({
  handleOnChange,
  handleOnFocus,
  placeholder,
  error
}) {
  return (
    <div className="search-input__wrapper">
      <input
        className="search-input"
        type="search"
        onChange={handleOnChange}
        placeholder={placeholder}
        onFocus={handleOnFocus}
      />
      {error && <div className="search-input__error-block">{error}</div>}
    </div>
  )
}

SearchInput.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnFocus: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
};

SearchInput.defaultProps = {
  placeholder: "Type here yo search tournaments"
};

export default SearchInput;

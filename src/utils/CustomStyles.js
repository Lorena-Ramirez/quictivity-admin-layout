const customStyle = {
  control: styles => ({
    ...styles,
    border: "none",
    borderBottom: "2px solid #07e0da",
    backgroundColor: "transparent",
    "&:hover": {
      borderColor: "#45f4e7"
    }
  }),
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: "#07e0da",
      border: "1px solid #07e0da",
      borderRadius: "5px",
      color: "#150035"
    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: "#150035",
    fontWeight: "bold"
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    ':hover': {
      backgroundColor: "#45f4e7",
      color: '#150035',
      borderRadius: "2px"
    },
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "#07e0da",
    ':hover': {
      color: '#45f4e7'
    },
  }),
  clearIndicator: (styles) => ({
    color: "#07e0da",
    ':hover': {
      color: '#9189ff'
    }
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "#768192",
    fontWeight: "bold"
  }),
  menuList: (styles) => ({
    ...styles,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#150035",
    border: "1px solid #5d00e2",
  }),
  noOptionsMessage: (styles) => ({
    ...styles,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#150035",
    border: "1px solid #5d00e2"
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isFocused && !isSelected ? "#07e0da" : "transparent",
    color: isFocused && !isSelected ? "#150035" : "white",

    "&:hover": {
      backgroundColor: isFocused ? "#07e0da" : "inherit",
      color: isFocused ? "#150035" : "inherit"
    }
  })
};

export default customStyle;
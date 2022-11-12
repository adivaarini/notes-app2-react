import PropTypes from "prop-types";

const ActionMenuSearch = ({ search, keywordChange }) => {
  return (
    <input type="text" placeholder="Browse your notes ....." value={search} onChange={(event) => keywordChange(event.target.value)}/>
  );
};

ActionMenuSearch.propType = {
  search: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default ActionMenuSearch;
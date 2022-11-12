import PropTypes from "prop-types";

const ActionBodyNote = ({ body }) => {
  return <p className="body-note">{body}</p>;
};

ActionBodyNote.propTypes = {
  body: PropTypes.string.isRequired,
};

export default ActionBodyNote;
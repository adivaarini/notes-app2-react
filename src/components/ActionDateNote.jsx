import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/index";

const ActionDateNote = ({ timestamp }) => {
  return <p className="date-note">{showFormattedDate(timestamp)}</p>;
};

ActionDateNote.propTypes = {
  timestamp: PropTypes.string.isRequired,
};

export default ActionDateNote;
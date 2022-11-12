import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ActionTitleNote = ({ id, title }) => {
  return (
    <h3 className="title-note">
      <Link to={`/notes/${id}`} title={title}>
        {title}
      </Link>
    </h3>
  );
};

ActionTitleNote.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ActionTitleNote;
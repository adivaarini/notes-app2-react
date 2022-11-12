import PropTypes from "prop-types";
import ActionTitleNote from "./ActionTitleNote";
import ActionDateNote from "./ActionDateNote";
import ActionBodyNote from "./ActionBodyNote";

const ContentNote = ({ note }) => {
  return (
    <article className="content-note">
      <ActionTitleNote id={note.id} title={note.title} />
      <ActionDateNote timestamp={note.createdAt} />
      <ActionBodyNote body={note.body} />
    </article>
  );
};

ContentNote.propTypes = {
  note: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ContentNote;
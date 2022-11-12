import PropTypes from "prop-types";
import ContentNote from "./ContentNote";

const ListNote = ({ notes }) => {
  return (
    <section className="list-note">
      {notes.map((note) => (
        <ContentNote key={note.id} note={note} />
      ))}
    </section>
  );
};

ListNote.propTypes = {
  notes: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default ListNote;
import PropTypes from "prop-types";
import { MdOutlineRemoveCircleOutline, MdOutlineArchive, MdOutlineUnarchive } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import Action from "./Action";

const ActionNote = ({ archived, handleEdit, handleArchive,handleDelete, }) => {
  return (
    <Action page="all-page">
      <>
        <button className="action" type="button" title="Edit" onClick={() => handleEdit()}>
          <TbEdit />
        </button>
        <button className="action" type="button" title={archived ? "Aktif" : "Arsip"} onClick={() => handleArchive()}>
          {archived ? <MdOutlineUnarchive /> : <MdOutlineArchive />}
        </button>
        <button className="action" type="button" title="Delete" onClick={() => handleDelete()}>
          <MdOutlineRemoveCircleOutline/>
        </button>
      </>
    </Action>
  );
};

ActionNote.propTypes = {
  archived: PropTypes.bool.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleArchive: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ActionNote;
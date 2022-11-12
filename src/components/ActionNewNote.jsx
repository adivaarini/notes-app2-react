import PropTypes from "prop-types";
import { TiDeleteOutline } from "react-icons/ti";
import { BiSave } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Action from "./Action";

const ActioNewNote = ({ handleSave }) => {
  const navigate = useNavigate();

  return (
    <Action page="new-notes">
      <>
        <button className="action" type="button" title="Save" onClick={() => handleSave()}>
          <BiSave />
        </button>
        <button className="action" type="button" title="Delete" onClick={() => navigate("/")}>
          <TiDeleteOutline />
        </button>
      </>
    </Action>
  );
};

ActioNewNote.propTypes = {
  handleSave: PropTypes.func.isRequired,
};

export default ActioNewNote;
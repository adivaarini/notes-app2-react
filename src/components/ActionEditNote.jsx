import PropTypes from "prop-types";
import { TbCheckbox } from "react-icons/tb";
import Action from "./Action"

const ActionEditNote = ({ handleSave }) => {
  return (
    <Action page="all-page">
      <button className="action" type="button" title="Save" onClick={() => handleSave()}>
        <TbCheckbox />
      </button>
    </Action>
  );
};

ActionEditNote.propTypes = {
  handleSave: PropTypes.func.isRequired,
};

export default ActionEditNote;
import { BiListPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Action from "./Action";

const ActionButtonNewNote = () => {
  const navigate = useNavigate();

  return (
    <Action page="currentpage">
      <button className="action" type="button" title="New" onClick={() => navigate("/new")}><BiListPlus/></button>
    </Action>
  );
};

export default ActionButtonNewNote;
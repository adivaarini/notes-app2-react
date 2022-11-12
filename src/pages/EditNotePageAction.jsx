import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { editNote, getNote } from "../utils/local-data";
import ActionEditNote from "../components/ActionEditNote";
import ActionNotFound from "../components/ActionNotFound";

class EditNoteClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      archived: false,
      body: "Type your notes here.....",
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onInputHandler = this.onInputHandler.bind(this);
  }

  handleChange = (e) => {
    this.setState(() => {
      return {
        title: e.target.value,
      };
    });
  };

  onInputHandler = (e) => {
    e.preventDefault();
    this.setState(() => {
      return {
        body: e.target.innerHTML,
      };
    });
  };

  handleSave = () => {
    const id = this.props.id;
    const { title, body } = this.state;
    editNote({ id, title, body });
    this.props.navigate(`/notes/${id}`);
  };

  componentDidMount() {
    const showNote = getNote(this.props.id);
    if (showNote) {
      const { title, archived, body } = showNote;
      this.setState({ id: this.props.id, title, archived, body });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { id, title, archived, body } = this.state;
    if (
      prevState.id !== id &&
      prevState.title !== title &&
      prevState.archived !== archived &&
      prevState.body !== body 
    ) {
      const showNote = getNote(this.props.id);
      if (showNote) {
        const { title, archived, body } = showNote;
        this.setState({ id: this.props.id, title, archived, body });
      }
    }
  }

  render() {
    const { id, title, body } = this.state;

    return (
      <section className="edit-page">
        {id !== "" ? (
          <>
            <Link
              to={`/notes/${this.props.id}`}
              className="edit-icon"
              title="Back" >
              <TiArrowBack />
            </Link>
            <div className="input-edit-page">
              <input
                className="title-edit-page"
                placeholder="Type your title note here....."
                value={title}
                onChange={this.handleChange}/>
              <div
                className="body-new-note"
                data-placeholder={body}
                contentEditable
                onInput={this.onInputHandler}
              />
            </div>
          </>
        ) : (
          <ActionNotFound/>
        )}

        <ActionEditNote handleSave={this.handleSave} />
      </section>
    );
  }
}

const EditNote = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  return <EditNoteClass {...props} navigate={navigate} id={id} />;
};

EditNote.propTypes = {
  id: PropTypes.string,
  navigate: PropTypes.func,
};

export default EditNote;
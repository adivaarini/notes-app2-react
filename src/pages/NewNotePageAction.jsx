import React, { Component } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";
import ActionNewNote from "../components/ActionNewNote";

class NewNoteClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
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
    this.setState(() => {
      return {
        body: e.target.innerHTML,
      };
    });
  };

  handleSave = () => {
    const { title, body } = this.state;
    addNote({ title, body });
    this.props.navigate("/");
  };

  render() {
    const { title, body } = this.state;

    return (
      <section className="new-notes">
        <div className="input-new-notes">
          <input
            className="title-new-notes"
            placeholder="Type your title notes here....."
            value={title}
            onChange={this.handleChange}
          />
          <div
            className="body-new-notes"
            data-placeholder={body}
            contentEditable
            onInput={this.onInputHandler}
          />
        </div>
        <ActionNewNote handleSave={this.handleSave} />
      </section>
    );
  }
}

const NewNote = (props) => {
  const navigate = useNavigate();

  return <NewNoteClass {...props} navigate={navigate} />;
};

NewNote.propTypes = {
  navigate: PropTypes.func,
};

export default NewNote;
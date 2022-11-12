import React, { Component } from "react";
import PropTypes from "prop-types";
import parser from "html-react-parser";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { showFormattedDate } from "../utils/index";
import { archiveNote, deleteNote, getNote,unarchiveNote, } from "../utils/local-data";
import ActionNote from "../components/ActionNote";
import ActionNotFound from "../components/ActionNotFound";

class ContentNoteClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit = () => {
    this.props.navigate(`/notes/${this.props.id}/edit`);
  };

  handleArchive = () => {
    if (this.state.note.archived) {
      unarchiveNote(this.props.id);
      this.props.navigate("/archives");
    } else {
      archiveNote(this.props.id);
      this.props.navigate("/");
    }
  };

  handleDelete = () => {
    deleteNote(this.props.id);
    this.props.navigate("/");
  };

  componentDidMount() {
    const showNote = getNote(this.props.id);
    if (showNote) {
      this.setState({ note: showNote });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.note !== this.state.note) {
      const showNote = getNote(this.props.id);
      if (showNote) {
        this.setState({ note: showNote });
      }
    }
  }

  render() {
    const { note } = this.state;

    return (
      <section className="all-page">
        {"id" in note ? (
          <>
            <Link to="/" className="content-icon" title="Back">
              <TiArrowBack/>
            </Link>
            <h3 className="title-all-page">{note.title}</h3>
            <p className="date-all-page">
              {showFormattedDate(note.createdAt)}
            </p>
            <div className="body-all-page">{parser(note.body)}</div>
          </>
        ) : (
          <ActionNotFound/>
        )}
        <ActionNote
          archived={note.archived || false}
          handleEdit={this.handleEdit}
          handleArchive={this.handleArchive}
          handleDelete={this.handleDelete}
        />
      </section>
    );
  }
}

const ContentNote = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  return <ContentNoteClass {...props} navigate={navigate} id={id} />;
};

ContentNote.propTypes = {
  id: PropTypes.string,
  navigate: PropTypes.func,
};

export default ContentNote;
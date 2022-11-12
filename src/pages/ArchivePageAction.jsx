import React, { Component } from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes } from "../utils/local-data";
import ActionButtonNewNote from "../components/ActionButtonNewNote";
import EmptyNote from "../components/EmptyNote";
import ListNote from "../components/ListNote";
import ActionMenuSearch from "../components/ActionMenuSearch";

class ArchivesClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      search: props.defaultKeyword || "",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(search) {
    this.setState(() => {
      return {
        search,
      };
    });

    this.props.keywordChange(search);
  }

  componentDidMount() {
    if (this.state.search !== "") {
      this.setState({
        notes: getArchivedNotes().filter((note) =>
          note.title.toLowerCase().includes(this.state.search.toLowerCase())
        ),
      });
    } else {
      this.setState({ notes: getArchivedNotes() });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      if (this.state.search !== "") {
        this.setState({
          notes: getArchivedNotes().filter((note) =>
            note.title.toLowerCase().includes(this.state.search.toLowerCase())
          ),
        });
      } else {
        this.setState({ notes: getArchivedNotes() });
      }
    }
  }

  render() {
    const { notes, search } = this.state;

    return (
      <section className="all-page">
        <h2>Archive Notes</h2>
        <section className="menu-search">
          <ActionMenuSearch search={search} keywordChange={this.handleSearch} />
        </section>
        {notes.length > 0 ? <ListNote notes={notes} /> : <EmptyNote/>}
        <ActionButtonNewNote/>
      </section>
    );
  }
}

const Archives = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search");
    
    const changeSearchParams = (search) => {
        setSearchParams({ search });
    };
    
    return (
    <ArchivesClass
    {...props}
      defaultKeyword={search}
      keywordChange={changeSearchParams}
    />
  );
};

Archives.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func,
};

export default Archives;
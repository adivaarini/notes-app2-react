import React, { Component } from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes } from "../utils/local-data";
import ActionButtonNewNote from "../components/ActionButtonNewNote";
import EmptyNote from "../components/EmptyNote";
import ListNote from "../components/ListNote";
import ActionMenuSearch from "../components/ActionMenuSearch";

class CurrentClass extends Component {
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
        notes: getActiveNotes().filter((note) =>
          note.title.toLowerCase().includes(this.state.search.toLowerCase())
        ),
      });
    } else {
      this.setState({ notes: getActiveNotes() });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      if (this.state.search !== "") {
        this.setState({
          notes: getActiveNotes().filter((note) =>
            note.title.toLowerCase().includes(this.state.search.toLowerCase())
          ),
        });
      } else {
        this.setState({ notes: getActiveNotes() });
      }
    }
  }

  render() {
    const { notes, search } = this.state;

    return (
      <section className="all-page">
        <h2>Active Notes</h2>
        <section className="menu-search">
          <ActionMenuSearch search={search} keywordChange={this.handleSearch} />
        </section>
        {notes.length > 0 ? <ListNote notes={notes} /> : <EmptyNote />}
        <ActionButtonNewNote/>
      </section>
    );
  }
}

const Current = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  const changeSearchParams = (search) => {
    setSearchParams({ search });
  };

  return (
    <CurrentClass
      {...props}
      defaultKeyword={search}
      keywordChange={changeSearchParams}
    />
  );
};

Current.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func,
};

export default Current;
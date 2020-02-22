import React, { Component, Fragment } from "react";
import { Paper, TextField } from "@material-ui/core";

class SearchBar extends Component {
  state = {
    searchTerm: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);
  };

  handleChange = e => this.setState({ searchTerm: e.target.value });

  render() {
    return (
      <Fragment>
        <Paper elevation={6} style={{ padding: "20px" }}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              fullWidth
              label="Search..."
              onChange={this.handleChange}
            />
          </form>
        </Paper>
      </Fragment>
    );
  }
}

export default SearchBar;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2)
    }
  }
}));

const BasicPagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage
}) => {
  const classes = useStyles();

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleChange = (e, currentPage) => {
    e.preventDefault();
    paginate(currentPage);
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Pagination
          count={pageNumbers.length}
          onChange={handleChange}
          color="secondary"
          page={currentPage}
        ></Pagination>
      </Grid>
    </div>
  );
};

export default BasicPagination;

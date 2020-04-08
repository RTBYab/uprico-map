import React, { useState } from "react";
import PropTypes from "prop-types";
import Map from "../map";
import { connect } from "react-redux";
//

import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { StylesProvider, ThemeProvider, jssPreset } from "@material-ui/styles";
import rtl from "jss-rtl";
import { create } from "jss";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
//

import { createStore } from "../../redux/actions/store";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
}));
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
  direction: "rtl",
  typography: {
    fontFamily: "IRANSans",
  },
});

const CreateStore = ({ store }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    address: "",
  });
  const classes = useStyles();

  const { name, description, address } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Grid container>
      <Grid item xs>
        <StylesProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="نام کسب و کار" />
                </Grid>
              </Grid>
            </div>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="With a grid"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
            </div>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="With a grid" />
                </Grid>
              </Grid>
            </div>
            <div className="mapCenter" style={{ direction: "ltr" }}>
              <Map />
            </div>
          </ThemeProvider>
        </StylesProvider>
      </Grid>
    </Grid>
  );
};

CreateStore.prototype = {
  store: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  store: state.store,
});
export default connect(mapStateToProps, { createStore })(CreateStore);

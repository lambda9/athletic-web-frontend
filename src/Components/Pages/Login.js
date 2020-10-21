import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { css, jsx } from "@emotion/core";
import SupervisedUserCircleOutlined from "@material-ui/icons/SupervisedUserCircleOutlined";

import "./Login.css";
import { RiAccountCircleLine, RiLoginCircleFill } from "react-icons/all";
import { AccountBalanceOutlined, AccountCircleRounded, SupervisedUserCircleSharp, SupervisorAccountRounded } from "@material-ui/icons";

/** @jsx jsx */

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
function Login() {
  const classes = useStyles();

  return (
    <div className="login-page">
      <div className="login-entry-form">
        <RiLoginCircleFill
          scale={5}
          style={{ fontSize: "96px", color: "white" }}
        />
        <h2>LOG IN</h2>

        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <RiAccountCircleLine />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="With a grid" />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Login;

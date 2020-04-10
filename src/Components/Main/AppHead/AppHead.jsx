import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@bit/mui-org.material-ui.styles";
import AppBar from "@bit/mui-org.material-ui.app-bar";
import Toolbar from "@bit/mui-org.material-ui.toolbar";
import Typography from "@bit/mui-org.material-ui.typography";
import logo from "../../../images/logo.png";
import { Grid } from "@material-ui/core";

const styles = {
  root: {
    flexGrow: 1,
    width: "100%",
  },
  appBar: {
    width: "100%",
    position: "static",
    background:
      " linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(185,221,215,1) 19%, rgba(4,133,112,1) 68%, rgba(4,133,112,1) 98%)",
  },
};

class AppHead extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        className={classes.root}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item className="app-head">
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Grid
                container
                wrap="nowrap"
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={3}
              >
                <Grid item xs className="img-logo">
                  <img
                    width={200}
                    height={200}
                    className="mr-3"
                    src={logo}
                    alt="logo"
                  />
                </Grid>
                <Grid item align="left" sm>
                  <Typography variant="h2">Нотариус</Typography>
                  <Typography variant="h3">Семина Ольга Алексеевна</Typography>
                </Grid>
                <Grid item align="center" xs>
                  <Grid
                    container
                    direction="column"
                    justify="space-around"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography variant="h5">Телефон</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">
                        <a
                          style={{ color: "black" }}
                          href="tel:8(8313)25-35-41"
                        >
                          (8313)25-35-41
                        </a>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5">Адрес</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">
                        <a
                          style={{ color: "black" }}
                          href="https://goo.gl/maps/rkWE6jhzDBXGsXQ36"
                        >
                          606025, г. Дзержинск, бул. Мира, д. 29
                        </a>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    );
  }
}

AppHead.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHead);

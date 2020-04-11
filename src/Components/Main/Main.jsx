import React from "react";
import PropTypes from "prop-types";
import Typography from "@bit/mui-org.material-ui.typography";
import { withStyles } from "@bit/mui-org.material-ui.styles";
import "../../styles/main.css";
import Grid from "@material-ui/core/Grid";
import VerticalLinearStepper from "./Appointment/VerticalLinearStepper";
import AppHead from "../Main/AppHead/AppHead";
import TimeTable from "./TimeTable/TimeTable";
import NotaryInfo from "./NotaryInfo/NotaryInfo";
import { Link } from "react-router-dom";
import About from "../Main/About/About";
import Message from "../Main/Message/Message";

const styles = {
  root: {
    flexGrow: 1,
    width: "100%",
  },
  table: {
    size: "small",
  },
};

class Main extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.root}
        spacing={7}
      >
        <Grid item xs style={{ width: "100%" }}>
          <AppHead />
        </Grid>
        <Grid item xs style={{ width: "85%" }}>
          <NotaryInfo />
        </Grid>
        <Grid item xs style={{ width: "90%" }}>
          <Message />
        </Grid>
        <Grid item xs style={{ width: "90%" }}>
          <TimeTable />
        </Grid>
        <Grid item xs style={{ width: "90%" }}>
          <VerticalLinearStepper />
        </Grid>
        <Grid item xs>
          <Typography variant="h4">Как нас найти</Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="h5">
            <a
              style={{ color: "black" }}
              href="https://goo.gl/maps/rkWE6jhzDBXGsXQ36"
            >
              606025, Нижегородская обл., г. Дзержинск, бул. Мира, д. 29
            </a>
          </Typography>
        </Grid>
        <Grid item className={classes.root}>
          <iframe
            title="google-map"
            width="100%"
            height="400"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d506.8825015945373!2d43.44345306767654!3d56.23604152619563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414e3af32ff22697%3A0x56c0393ff2f15c42!2sNotarius!5e0!3m2!1sen!2sit!4v1566394933218!5m2!1sen!2sit"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </Grid>
        <Grid item xs style={{ width: "90%" }}>
          <About />
        </Grid>
        <Grid item xs>
          <Link to="/for-notary/">Для нотариуса</Link>
        </Grid>
      </Grid>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);

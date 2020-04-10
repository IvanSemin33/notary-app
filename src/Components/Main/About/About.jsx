import React from "react";
import Firebase from "firebase";
import Typography from "@bit/mui-org.material-ui.typography";
import Grid from "@material-ui/core/Grid";

class About extends React.Component {
  state = {
    aboutData: [],
  };

  componentWillMount() {
    let ref = Firebase.database().ref(`/about`);
    ref.on("value", (snapshot) => {
      const aboutData = snapshot.val() || [];
      this.setState({ aboutData });
      console.log(aboutData);
    });
  }

  render() {
    const { aboutData } = this.state;

    return (
      <Grid container direction="column" justify="center" alignItems="center">
        {aboutData !== [] && <Typography variant="h4">О нас</Typography>}
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          spacing={3}
        >
          {aboutData.map((data) => (
            <Grid item>
              <Typography variant="h5">{data.title}</Typography>
              <Typography variant="body1">{data.info}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  }
}

export default About;

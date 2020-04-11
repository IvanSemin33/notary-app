import React from "react";
import Firebase from "firebase";
import Typography from "@bit/mui-org.material-ui.typography";
import Grid from "@material-ui/core/Grid";

class Message extends React.Component {
  state = {
    message: [],
  };

  componentWillMount() {
    let ref = Firebase.database().ref(`/message`);
    ref.on("value", (snapshot) => {
      const message = snapshot.val() || [];
      this.setState({ message });
      console.log(message);
    });
  }

  render() {
    const { message } = this.state;

    return (
      <Grid container direction="column" justify="center" alignItems="center">
        {message.length !== 0 && (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography variant="h4" color="error">
                Внимание!!!
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">
                {message}
              </Typography>
            </Grid>
          </Grid>
        )}
      </Grid>
    );
  }
}

export default Message;

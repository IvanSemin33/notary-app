import React from "react";
import { Grid } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Firebase from "firebase";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

class EditMessage extends React.Component {
  state = {
    message: "",
  };

  componentWillMount() {
    let ref = Firebase.database().ref(`/message`);
    ref.on("value", (snapshot) => {
      this.setState({ message: snapshot.val() });
    });
  }

  onChangeNewMessage = (event) => {
    this.setState({ message: event.target.value });
  };

  onClickAdd = () => {
    Firebase.database().ref(`/`).update({
      message: this.state.message,
    });
  };

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        spacing={5}
        style={{ width: "100%" }}
      >
        <Table style={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Сообщение</TableCell>
              <TableCell align="center">Действие</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={333}>
              <TableCell align="center">
                <TextField
                  style={{ width: "100%" }}
                  value={this.state.message}
                  margin="normal"
                  variant="outlined"
                  inputProps={{ "aria-label": "bare" }}
                  onChange={this.onChangeNewMessage}
                  multiline
                  row="3"
                />
              </TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => this.onClickAdd()}
                >
                  Обновить
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    );
  }
}
export default EditMessage;

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

class EditAbout extends React.Component {
  state = {
    aboutData: [],
    newTitle: "",
    newInfo: "",
  };

  componentWillMount() {
    let ref = Firebase.database().ref(`/about`);
    ref.on("value", (snapshot) => {
      const aboutData = snapshot.val();
      this.setState({ aboutData });
      console.log(aboutData);
    });
  }

  onChangeTitle = (event) => {
    console.log(event.target.id);
    Firebase.database().ref(`/about/${event.target.id}`).update({
      title: event.target.value,
    });
  };

  onChangeInfo = (event) => {
    console.log(event.target.id);
    Firebase.database().ref(`/about/${event.target.id}`).update({
      info: event.target.value,
    });
  };

  onChangeNewName = (event) => {
    this.setState({ newTitle: event.target.value });
  };

  onChangeNewPrice = (event) => {
    this.setState({ newInfo: event.target.value });
  };

  onClickAdd = (id) => {
    Firebase.database().ref(`/about/${id}/`).update({
      title: this.state.newTitle,
      info: this.state.newInfo,
    });
    this.setState({ newTitle: "", newInfo: "" });
  };

  renderTable = () => {
    return this.state.aboutData.map((data) => {
      const index = this.state.aboutData.indexOf(data);
      return (
        <TableRow key={index}>
          <TableCell component="th" scope="row" align="center">
            {index}
          </TableCell>
          <TableCell align="center">
            <TextField
              style={{ width: "700px" }}
              id={index}
              defaultValue={data.title}
              margin="normal"
              variant="outlined"
              inputProps={{ "aria-label": "bare" }}
              onChange={this.onChangeTitle}
            />
          </TableCell>
          <TableCell align="center">
            <TextField
              id={index}
              defaultValue={data.info}
              margin="normal"
              variant="outlined"
              inputProps={{ "aria-label": "bare" }}
              onChange={this.onChangeInfo}
            />
          </TableCell>
        </TableRow>
      );
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
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Заголовок</TableCell>
              <TableCell align="center">Информация</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.renderTable()}
            <TableRow key={333}>
              <TableCell component="th" scope="row" align="center">
                {this.state.aboutData.length}
              </TableCell>
              <TableCell align="center">
                <TextField
                  style={{ width: "700px" }}
                  id={this.state.aboutData.length}
                  value={this.state.newTitle}
                  margin="normal"
                  variant="outlined"
                  inputProps={{ "aria-label": "bare" }}
                  onChange={this.onChangeNewName}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  id={this.state.aboutData.length}
                  value={this.state.newInfo}
                  margin="normal"
                  variant="outlined"
                  inputProps={{ "aria-label": "bare" }}
                  onChange={this.onChangeNewPrice}
                />
              </TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => this.onClickAdd(this.state.aboutData.length)}
                >
                  Добавить
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    );
  }
}
export default EditAbout;

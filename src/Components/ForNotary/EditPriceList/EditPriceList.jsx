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

class EditPriceList extends React.Component {
  state = {
    docsInfo: [],
    newDocName: "",
    newDocPrice: "",
  };

  componentWillMount() {
    let ref = Firebase.database().ref(`/docs-info`);
    ref.on("value", (snapshot) => {
      const docsInfo = snapshot.val();
      //   setTimeout(() => '', 10000);
      this.setState({ docsInfo });
      console.log(docsInfo);
    });
  }

  onChangeName = (event) => {
    console.log(event.target.id);
    Firebase.database().ref(`/docs-info/${event.target.id}`).update({
      name: event.target.value,
    });
  };

  onChangePrice = (event) => {
    console.log(event.target.id);
    Firebase.database().ref(`/docs-info/${event.target.id}`).update({
      price: event.target.value,
    });
  };

  onChangeNewName = (event) => {
    this.setState({ newDocName: event.target.value });
  };

  onChangeNewPrice = (event) => {
    this.setState({ newDocPrice: event.target.value });
  };

  onClickAdd = (id) => {
    Firebase.database().ref(`/docs-info/${id}/`).update({
      name: this.state.newDocName,
      price: this.state.newDocPrice,
    });
    this.setState({ newDocName: "" });
    this.setState({ newDocPrice: "" });
  };

  renderTable = () => {
    return this.state.docsInfo.map((doc) => {
      const index = this.state.docsInfo.indexOf(doc);
      return (
        <TableRow key={index}>
          <TableCell component="th" scope="row" align="center">
            {index}
          </TableCell>
          <TableCell align="center">
            <TextField
              style={{ width: "100%" }}
              id={index}
              defaultValue={doc.name}
              margin="normal"
              variant="outlined"
              inputProps={{ "aria-label": "bare" }}
              onChange={this.onChangeName}
            />
          </TableCell>
          <TableCell align="center">
            <TextField
              id={index}
              defaultValue={doc.price}
              margin="normal"
              variant="outlined"
              inputProps={{ "aria-label": "bare" }}
              onChange={this.onChangePrice}
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
              <TableCell align="center">Название</TableCell>
              <TableCell align="center">Цена</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.renderTable()}
            <TableRow key={333}>
              <TableCell component="th" scope="row" align="center">
                {this.state.docsInfo.length}
              </TableCell>
              <TableCell align="center">
                <TextField
                  style={{ width: "100%" }}
                  id={this.state.docsInfo.length}
                  value={this.state.newDocName}
                  margin="normal"
                  variant="outlined"
                  inputProps={{ "aria-label": "bare" }}
                  onChange={this.onChangeNewName}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  id={this.state.docsInfo.length}
                  value={this.state.newDocPrice}
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
                  onClick={() => this.onClickAdd(this.state.docsInfo.length)}
                >
                  Добавить
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Grid item></Grid>
      </Grid>
    );
  }
}
export default EditPriceList;

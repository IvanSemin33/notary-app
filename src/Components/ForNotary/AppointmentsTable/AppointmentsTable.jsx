import React from "react";
import { Grid } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Firebase from "firebase";
import Typography from "@bit/mui-org.material-ui.typography";
import { Button } from "@material-ui/core";
import _ from "lodash";

class AppointmentsTable extends React.Component {
  state = {
    tableData: {},
    pickedMonth: new Date().getMonth() + 1,
    currentYear: new Date().getFullYear(),
  };

  componentWillMount() {
    this.onClickRefresh();
  }

  onClickRefresh = () => {
    const { pickedMonth, currentYear } = this.state;

    let ref = Firebase.database().ref(`/${currentYear}/${pickedMonth}/`);
    ref.on("value", (snapshot) => {
      this.setState({ tableData: snapshot.val() });
    });
  };

  renderTable = () => {
    const { tableData } = this.state;

    const table = _.keys(tableData)
      .sort()
      .map((day) => {
        const currentDateData = tableData[day];
        return _.keys(currentDateData).map((time) => {
          const currentTimeData = currentDateData[time];
          const docs = currentTimeData.docs.map((doc) => (
            <p key={doc.name}>{doc.name}</p>
          ));
          return (
            <TableRow key={time}>
              <TableCell component="th" scope="row" align="center">
                {currentTimeData.client.first}
              </TableCell>
              <TableCell align="center">
                {currentTimeData.client.last}
              </TableCell>
              <TableCell align="center">{day}</TableCell>
              <TableCell align="center">{time}</TableCell>
              <TableCell align="center">{docs}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => this.onClickDelete({ day, time })}
                >
                  Удалить
                </Button>
              </TableCell>
            </TableRow>
          );
        });
      });
    return table;
  };

  handleMonthChange = (event) => {
    this.setState({ pickedMonth: event.target.value });
  };

  onClickDelete = (deletePath) => {
    const year = this.state.currentYear;
    const month = this.state.pickedMonth;
    const { day, time } = deletePath;
    Firebase.database().ref(`/${year}/${month}/${day}/${time}`).remove();
  };

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        spacing={3}
      >
        <Grid item align="center">
          <Typography variant="h5">
            Удалитять запись из таблицы, только при отмене записи!
          </Typography>
        </Grid>
        <Grid item align="center">
          <FormControl>
            <InputLabel htmlFor="month-simple">Месяц</InputLabel>
            <Select
              value={this.state.pickedMonth}
              onChange={this.handleMonthChange}
            >
              <MenuItem value={1}>Январь</MenuItem>
              <MenuItem value={2}>Февраль</MenuItem>
              <MenuItem value={3}>Март</MenuItem>
              <MenuItem value={4}>Апрель</MenuItem>
              <MenuItem value={5}>Май</MenuItem>
              <MenuItem value={6}>Июнь</MenuItem>
              <MenuItem value={7}>Июль</MenuItem>
              <MenuItem value={8}>Август</MenuItem>
              <MenuItem value={9}>Сентябрь</MenuItem>
              <MenuItem value={10}>Октябрь</MenuItem>
              <MenuItem value={11}>Ноябрь</MenuItem>
              <MenuItem value={12}>Декабрь</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item align="center">
          <Button
            onClick={this.onClickRefresh}
            variant="contained"
            color="primary"
          >
            Обновить
          </Button>
        </Grid>
        <Grid item style={{ width: "100%" }}>
          <Table style={{ width: "100%" }}>
            <TableHead>
              <TableRow>
                <TableCell align="center">Имя</TableCell>
                <TableCell align="center">Фамилия</TableCell>
                <TableCell align="center">Дата</TableCell>
                <TableCell align="center">Время</TableCell>
                <TableCell align="center">Документы</TableCell>
                <TableCell align="center">Действие</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.renderTable()}</TableBody>
          </Table>
        </Grid>
      </Grid>
    );
  }
}
export default AppointmentsTable;

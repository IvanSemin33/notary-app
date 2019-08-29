import 'date-fns';
import React from 'react';
import Firebase from 'firebase';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from "date-fns/locale/ru";
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import PropTypes from 'prop-types';
import { withStyles } from "@bit/mui-org.material-ui.styles";
import Input from "@bit/mui-org.material-ui.input";
import InputLabel from "@bit/mui-org.material-ui.input-label";
import MenuItem from "@bit/mui-org.material-ui.menu-item";
import FormControl from "@bit/mui-org.material-ui.form-control";
import Select from "@bit/mui-org.material-ui.select";
import {timeTable, daysType} from "../../../Database/database";

const styles = theme => ({
  root: {
    width: '100%'
  },
  formControl: {
    margin: theme.spacing.unit,
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class DataTimePicker extends React.Component {
  state = {
    pickedDate: this.props.pickedDate,
    pickedTime: this.props.pickedTime,
    freeTimeTable: [],
    // currentDateData
  }

  handleDateChange = (date) => {
    this.setState({pickedDate: date});
    this.getFreeTimeTable(date);
  }

  componentDidMount = () => {
    this.getFreeTimeTable(this.state.pickedDate);
  }

  handleTimeChange = event => {
    this.setState({ pickedTime: event.target.value });
    this.props.callbackPickedDateTime({ date: this.state.pickedDate, time: event.target.value });
  };

  getFreeTimeTable = (pickedDate) => {
    const day = pickedDate.getDay();
    const date = pickedDate.getDate();
    const month = pickedDate.getMonth()+1;
    const year = pickedDate.getFullYear();
    const fullDate = `${date}-${month}-${year}`;
    const dayTable = timeTable[day];

    let ref = Firebase.database().ref(`${fullDate}/`);
    let currentDateData = null;
    ref.on("value", snapshot => {
      currentDateData = snapshot.val();
      this.setState({currentDateData});
      // console.log(currentDateData);
      
      if(currentDateData === null) {
        this.setState({ freeTimeTable: dayTable })
      }
      else {
        const currentDateTime = Object.keys(currentDateData);
        const freeTimeTable = dayTable.filter( time => !currentDateTime.includes(time));
        this.setState({freeTimeTable});
      }
    });
    // console.log(this.state);
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container
        direction="row"
        justify="space-around"
        alignItems="center"
        spacing={2}
        className={classes.root}
      >
        {/* <Grid item xl={12}>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
            className={classes.root}
          > */}
            <Grid item md={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                <KeyboardDatePicker
                  style={{width: "100%"}} 
                  margin="normal"
                  id="date-picker-dialog"
                  label="Дата приема"
                  format="dd/MM/yyyy"
                  value={this.state.pickedDate}
                  onChange={this.handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item md={12}>
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="time-label-placeholder">
                  Время приема
                </InputLabel>
                <Select 
                  value={this.state.pickedTime}
                  onChange={this.handleTimeChange}
                  input={<Input id="time-label-placeholder" />}
                  displayEmpty
                  className={classes.selectEmpty}
                >
                  <MenuItem value="">
                    Выберите время
                  </MenuItem>
                  {this.state.freeTimeTable.map( (time) => 
                    <MenuItem value={time} key={time}>{time}</MenuItem>)
                  }
                </Select>
              </FormControl>
            </Grid>
          </Grid>
      //   </Grid>
      // </Grid>
    );
  }
}

DataTimePicker.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DataTimePicker);
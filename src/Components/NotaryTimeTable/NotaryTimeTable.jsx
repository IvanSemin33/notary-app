import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import ruLocale from "date-fns/locale/ru";
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Firebase from 'firebase';
import { Button } from '@material-ui/core';
import sortobject from 'deep-sort-object';
import TextField from '@material-ui/core/TextField';
import _ from 'lodash';

class NotaryTimeTable extends React.Component {
    state = {
        isLogin: false,
        pass: '5819',
        passInput: '',

        tableData: {},
        pickedMonth: new Date().getMonth()+1,
        currentYear: new Date().getFullYear(),
    }
    
    onClickRefresh = () => {
        const {pickedMonth, currentYear} = this.state;

        let ref = Firebase.database().ref(`/${currentYear}/${pickedMonth}/`);
        let tableData = {};
        ref.on("value", snapshot => {
            tableData = snapshot.val();
        });
        this.setState({tableData});
        // console.log(tableData);
    }

    renderTable = () => {
        const {tableData, pickedMonth} = this.state;
        
        const table = _.keys(tableData).map( day => {
            const currentDateData = tableData[day];
            return _.keys(currentDateData).map( time => {
                const currentTimeData = currentDateData[time];
                const docs = currentTimeData.docs.map( doc => <p key={doc.name}>{doc.name}</p>);
                console.log(currentTimeData);
                return(
                    <TableRow key={time}>
                        <TableCell component="th" scope="row" align="center">{currentTimeData.client.first}</TableCell>
                        <TableCell align="center">{currentTimeData.client.last}</TableCell>
                        <TableCell align="center">{day}</TableCell>
                        <TableCell align="center">{time}</TableCell>
                        <TableCell align="center">{docs}</TableCell>
                    </TableRow>
                )
            });
        });
        return table;
    }

    handlePassInput = (e) => {
        this.setState({passInput: e.target.value})
    }
    onLogin = () => {
        if(this.state.passInput === this.state.pass) {
            this.setState({isLogin: true});
        }
    }

    handleMonthChange = event => {
        this.setState({ pickedMonth: event.target.value });
    };

    render() {
        return(
            <Grid container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={5}
            >
                {this.state.isLogin ? '' :
                    (<Grid item>
                        <Grid item>
                            <TextField
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                onChange={this.handlePassInput}
                            />
                        </Grid>
                        <Grid item>
                            <Button onClick={this.onLogin} variant="contained" size="large" color="primary">Войти</Button>
                        </Grid>
                    </Grid>)
                }
                {this.state.isLogin ? 
                (<Grid item>   
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
                        <Button onClick={this.onClickRefresh} variant="contained" size="large" color="primary">Обновить</Button>
                    </Grid>
                    <Grid item>
                        <Table style={{width: '100%'}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Имя</TableCell>
                                    <TableCell align="center">Фамилия</TableCell>
                                    <TableCell align="center">Дата</TableCell>
                                    <TableCell align="center">Время</TableCell>
                                    <TableCell align="center">Документы</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {this.renderTable()}
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>):''}
            </Grid>
        );
    }
}
export default NotaryTimeTable;
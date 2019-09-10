import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import ruLocale from "date-fns/locale/ru";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
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
        pickedDateData: {},
        pickedDate: new Date(),
        fullDate: '',
        pass: '5819',
        passInput: '',
    }

    handleDateChange = (date) => {
        this.setState({pickedDate: date});
    }
    
    onClickRefresh = () => {
        const {pickedDate} = this.state;
        const day = pickedDate.getDay();
        const date = pickedDate.getDate();
        const month = pickedDate.getMonth()+1;
        const year = pickedDate.getFullYear();
        const fullDate = `${date}-${month}-${year}`;

        let ref = Firebase.database().ref(`/${year}/${fullDate}`);
        let pickedDateData = {};
        ref.on("value", snapshot => {
            pickedDateData = snapshot.val();
        });
        this.setState({pickedDateData});
        this.setState({fullDate});
    }

    renderTable = () => {
        const {fullDate, pickedDateData, isLogin} = this.state;
        
        const table = _.keys(pickedDateData).map( time => {
            const currentTimeData = pickedDateData[time];
            const docs = currentTimeData.docs.map( doc => <p>{doc.name}</p>);
            console.log(currentTimeData);
            return(
                <TableRow key={time}>
                        <TableCell component="th" scope="row" align="center">{currentTimeData.client.first}</TableCell>
                        <TableCell align="center">{currentTimeData.client.last}</TableCell>
                        <TableCell align="center">{fullDate}</TableCell>
                        <TableCell align="center">{time}</TableCell>
                        <TableCell align="center">{docs}</TableCell>
                </TableRow>
            )
        });
        return table;
    }

    handlePassInput = (e) => {
        this.setState({passInput: e.target.value})
    }
    onEnter = () => {
        if(this.state.passInput === this.state.pass) {
            this.setState({isLogin: true});
        }
    }

    render() {
        return(
            <div>
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    onChange={this.handlePassInput}
                />
                <Button onClick={this.onEnter}>Войти</Button>
                {this.state.isLogin ? 
                    (<div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                            <KeyboardDatePicker
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
                        <Button onClick={this.onClickRefresh}>Обновить</Button>
                        <Table>
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
                    </div>):''}
            </div>
        );
    }
}
export default NotaryTimeTable;
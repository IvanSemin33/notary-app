import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import AppBar from "@bit/mui-org.material-ui.app-bar";
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import ruLocale from "date-fns/locale/ru";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
import Tabs from "@bit/mui-org.material-ui.tabs";
import Tab from "@bit/mui-org.material-ui.tab";
import AppointmentsTable from './AppointmentsTable/AppointmentsTable';
import EditPriceList from './EditPriceList/EditPriceList';

class ForNotary extends React.Component {
    state = {
        isLogin: true,
        pass: '5819',
        passInput: '',
        tab: 0,
    }

    handlePassInput = (e) => {
        this.setState({passInput: e.target.value})
    }
    
    onLogin = () => {
        if(this.state.passInput === this.state.pass) {
            this.setState({isLogin: true});
        }
    }

    handleChangeTab = (event, value) => {
        this.setState({ tab: value });
      };

    render() {
        return(
            <Grid container
                direction="column"
                justify="space-around"
                alignItems="center"
                spacing={5}
                style={{width: '100%'}}
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
                {this.state.isLogin ? (
                    <Grid item style={{width: '100%'}} >
                        <AppBar position="static" color="default" style={{width: '100%'}}>
                            <Tabs value={this.state.tab} indicatorColor="primary" textColor="primary" onChange={this.handleChangeTab}>
                                <Tab label="Таблица записей"/>
                                <Tab label="Редактировать прайс-лист"/>
                            </Tabs>
                        </AppBar>
                    <Grid item style={{width: '100%'}} >
                        {this.state.tab === 0 ? <AppointmentsTable /> : <EditPriceList />}
                    </Grid>
                    </Grid>)
                : ''}
            </Grid>
        );
    }
}
export default ForNotary;
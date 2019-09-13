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
        isLogin: false,
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
                justify="space-between"
                alignItems="center"
                spacing={3}
                style={{width: '100%'}}
            >
                {this.state.isLogin ? '' :
                    (<Grid item>
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            onChange={this.handlePassInput}
                        />
                    </Grid>)
                }
                {this.state.isLogin ? '' :
                    (<Grid item>
                        <Button onClick={this.onLogin} variant="contained" color="primary">Войти</Button>
                    </Grid>)
                }
                {this.state.isLogin ? 
                    (<Grid item style={{width: '30%'}} >
                        <Tabs value={this.state.tab} indicatorColor="primary" textColor="primary" onChange={this.handleChangeTab}>
                            <Tab label="Таблица записей"/>
                            <Tab label="Редактировать прайс-лист"/>
                        </Tabs>
                    </Grid>) 
                : ''}
                {this.state.isLogin ? 
                    (<Grid item style={{width: '100%'}} >
                        {this.state.tab === 0 ? <AppointmentsTable /> : <EditPriceList />}
                    </Grid>)
                : ''}
            </Grid>
        );
    }
}
export default ForNotary;
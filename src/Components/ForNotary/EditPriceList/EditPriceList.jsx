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


class EditPriceList extends React.Component {

    state = {
        docsInfo: [],
        newDocName: '',
        newDocPrice: '',
    }

    componentWillMount() {
        let ref = Firebase.database().ref(`/docs-info`);
        ref.on("value", snapshot => {
          const docsInfo = snapshot.val();
        //   setTimeout(() => '', 10000);
          this.setState({docsInfo});
          console.log(docsInfo);
        });
    }
    
    onChangeName = (event) => {
        console.log(event.target.id);
        Firebase.database().ref(`/docs-info/${event.target.id}`).update(
            {
              name: event.target.value
            }
        );
    }

    onChangePrice = (event) => {
        console.log(event.target.id);
        Firebase.database().ref(`/docs-info/${event.target.id}`).update(
            {
              price: event.target.value
            }
        );
    }

    onChangeNewName = (event) => {
        this.setState({newDocName: event.target.value})
    }

    onChangeNewPrice = (event) => {
        this.setState({newDocPrice: event.target.value})
    }

    onClickAdd = (event) => {
        console.log(this.state.docsInfo.length);
        Firebase.database().ref(`/docs-info/${this.state.docsInfo.length}/`).update(
            {
                name: this.state.newDocName,
                price: this.state.newDocPrice
            }
        );
    }
    

    renderTable = () => {
        return this.state.docsInfo.map( doc => {
            const index = this.state.docsInfo.indexOf(doc);
            return(
                <TableRow key={index}>
                    <TableCell component="th" scope="row" align="center">{index}</TableCell>
                    <TableCell align="center">
                        <TextField
                            style={{width: "700px"}}
                            id={index}
                            defaultValue={doc.name}
                            margin="normal"
                            variant="outlined"
                            inputProps={{ 'aria-label': 'bare' }}
                            onChange={this.onChangeName}
                        />
                    </TableCell>
                    <TableCell align="center">
                        <TextField
                            id={index}
                            defaultValue={doc.price}
                            margin="normal"
                            variant="outlined"
                            inputProps={{ 'aria-label': 'bare' }}
                            onChange={this.onChangePrice}
                        />
                    </TableCell>
                </TableRow>
            )
        })
    }

    render() {
        return(
            <Grid container
                direction="column"
                justify="space-around"
                alignItems="center"
                spacing={5}
                style={{width: '100%'}}
            >
                <Table style={{width: '100%'}}>
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
                            <TableCell component="th" scope="row" align="center">{this.state.docsInfo.length}</TableCell>
                            <TableCell align="center">
                                <TextField
                                    style={{width: "700px"}}                        
                                    id={this.state.docsInfo.length}
                                    defaultValue={''}
                                    margin="normal"
                                    variant="outlined"
                                    inputProps={{ 'aria-label': 'bare' }}
                                    onChange={this.onChangeNewName}
                                />
                            </TableCell>
                            <TableCell align="center">
                                <TextField
                                    id={this.state.docsInfo.length}
                                    defaultValue={''}
                                    margin="normal"
                                    variant="outlined"
                                    inputProps={{ 'aria-label': 'bare' }}
                                    onChange={this.onChangeNewPrice}
                                />
                            </TableCell>
                            <TableCell align="center">
                                <Button onClick={this.onClickAdd}>
                                    Добавить
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                
                <Grid item>

                </Grid>
            </Grid>
        )
    }
}
export default EditPriceList;
import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Tabs from "@bit/mui-org.material-ui.tabs";
import Tab from "@bit/mui-org.material-ui.tab";
import AppointmentsTable from "./AppointmentsTable/AppointmentsTable";
import EditPriceList from "./EditPriceList/EditPriceList";
import EditAbout from "./EditAbout/EditAbout";
import EditMessage from './EditMessage/EditMassage';

class ForNotary extends React.Component {
  state = {
    isLogin: false,
    pass: "5819",
    passInput: "",
    tab: 0,
  };

  handlePassInput = (e) => {
    this.setState({ passInput: e.target.value });
  };

  onLogin = () => {
    if (this.state.passInput === this.state.pass) {
      this.setState({ isLogin: true });
    }
  };

  handleChangeTab = (event, value) => {
    this.setState({ tab: value });
  };

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        spacing={3}
        style={{ width: "100%" }}
      >
        {this.state.isLogin ? (
          ""
        ) : (
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
        )}
        {!this.state.isLogin && (
          <Grid item>
            <Button onClick={this.onLogin} variant="contained" color="primary">
              Войти
            </Button>
          </Grid>
        )}
        {this.state.isLogin && (
          <Grid item style={{ width: "35%" }}>
            <Tabs
              value={this.state.tab}
              indicatorColor="primary"
              textColor="primary"
              onChange={this.handleChangeTab}
            >
              <Tab label="Таблица записей" />
              <Tab label="Редактировать прайс-лист" />
              <Tab label="Редактировать О нас" />
              <Tab label="Обьявление" />
            </Tabs>
          </Grid>
        )}
        {this.state.isLogin && (
          <Grid item style={{ width: "100%" }}>
            {this.state.tab === 0 && <AppointmentsTable />}
            {this.state.tab === 1 && <EditPriceList />}
            {this.state.tab === 2 && <EditAbout />}
            {this.state.tab === 3 && <EditMessage />}
          </Grid>
        )}
      </Grid>
    );
  }
}
export default ForNotary;

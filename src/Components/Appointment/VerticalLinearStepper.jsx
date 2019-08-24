import React from 'react';
import Firebase from 'firebase';
import PropTypes from 'prop-types';
import { withStyles } from "@bit/mui-org.material-ui.styles";
import Stepper from "@bit/mui-org.material-ui.stepper";
import Step from "@bit/mui-org.material-ui.step";
import StepLabel from "@bit/mui-org.material-ui.step-label";
import StepContent from "@bit/mui-org.material-ui.step-content";
import Button from "@bit/mui-org.material-ui.button";
import Paper from "@bit/mui-org.material-ui.paper";
import Typography from "@bit/mui-org.material-ui.typography";
import DocsPicker from './DocsPicker/DocsPicker';
import DataTimePicker from './DataTimePicker/DataTimePicker';
import ClientNameInput from './ClientNameInput/ClientNameInput';
import docsInfo from '../../Database/docsInfo';

const styles = theme => ({
  root: {
    width: '100%'
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2
  },
  resetContainer: {
    padding: theme.spacing.unit * 3
  }
});

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    pickedDocs: [],
    pickedDateTime: {
      date: new Date(),
      time: '',
    },
    inputedName: {
      first: '',
      last: '',
    },
  };

  constructor(props){
    super(props);
  }

  getSteps() {
    return ['Выберите нужные вам услуги', 'Выберите время приема', 'Введите личные данные'];
  }

  getStepContent(step) {
    switch (step) {
      case 0:
        return(
          <DocsPicker callbackPickedDocs={this.callbackPickedDocs} pickedDocs={this.state.pickedDocs}/>
        );
      case 1:
        return(
          <DataTimePicker callbackPickedDateTime={this.callbackPickedDateTime} pickedDate={this.state.pickedDateTime.date } pickedTime={this.state.pickedDateTime.time }/>
        );
      case 2:
        return(
          <ClientNameInput callbackClientNameInput={this.callbackClientNameInput} first={this.state.inputedName.first} last={this.state.inputedName.last}/>
        );
      default:
        return 'Unknown step';
    }
  }

  handleNext = () => {
    this.setState(state => ({activeStep: state.activeStep + 1}));
    console.log(this.state);
    
    //appoitment button
    const steps = this.getSteps();
    if(this.state.activeStep === steps.length - 1) {
      
      const {time, date} = this.state.pickedDateTime;
      const dateNum = date.getDate();
      const month = date.getMonth()+1;
      const year = date.getFullYear();
      const fullDate = `${dateNum}-${month}-${year}`;
      const {first, last} = this.state.inputedName;
      const docs = this.state.pickedDocs.map( (docIndex) => docsInfo[docIndex]);
    
      Firebase.database().ref(`/${fullDate}/`).update(
        {
          [time]: {
            client: `${last} ${first}`,
            docs: docs
          }
        }
      );
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleNewAppointment = () => {
    this.setState({
      activeStep: 0,
      pickedDocs: [],
      pickedDateTime: {
        date: new Date(),
        time: '',
      },
      inputedName: {
        first: '',
        last: '',
      },
    });
  };

  callbackPickedDocs = (pickedDocs) => {
    this.setState({pickedDocs: pickedDocs.sort()});
  }

  callbackPickedDateTime = (pickedDateTime) => {
    this.setState({pickedDateTime});
  }

  callbackClientNameInput = (inputedName) => {
    this.setState({inputedName});
  }

  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;

    return <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                {this.getStepContent(index)}
                <div className={classes.actionsContainer}>
                  <div>
                    <Button disabled={activeStep === 0} onClick={this.handleBack} className={classes.button}>
                      Назад
                    </Button>
                    <Button variant="contained" color="primary" onClick={this.handleNext} className={classes.button}>
                      {activeStep === steps.length - 1 ? 'Записаться' : 'Далее'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>)}
        </Stepper>
        {activeStep === steps.length && <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>Вы записаны на прием.</Typography>
            <Button onClick={this.handleNewAppointment} className={classes.button} color="primary" variant="contained">
              Новая запись
            </Button>
          </Paper>}
      </div>;
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(VerticalLinearStepper);
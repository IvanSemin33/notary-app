import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


class ClientNameInput extends React.Component {
    state = {
        first: this.props.first,
        last: this.props.last,
    }
    
    handleOnChangeFirst = (event) => {
        this.setState({first: event.target.value})
        // this.props.callbackClientNameInput({first: event.target.value});
    }

    handleOnChangeLast = (event) => {
        this.setState({last: event.target.value})
        this.props.callbackClientNameInput({first: this.state.first, last: event.target.value});
    }

    render() {
        return(
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item style={{width: '30%'}}>
                    <TextField
                        // style={{width: '50%'}}
                        required
                        id="standard-required"
                        label="Имя"
                        margin="normal"
                        value={this.state.first}
                        onChange={this.handleOnChangeFirst}
                    />
                </Grid>
                <Grid item style={{width: '30%'}}>
                    <TextField
                        required
                        id="standard-required"
                        label="Фамилия"
                        margin="normal"
                        value={this.state.last}
                        onChange={this.handleOnChangeLast}
                    />
                </Grid>
            </Grid>
        )
    }
}
export default ClientNameInput;
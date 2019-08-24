import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@bit/mui-org.material-ui.styles";
import ExpansionPanel from "@bit/mui-org.material-ui.expansion-panel";
import ExpansionPanelDetails from "@bit/mui-org.material-ui.expansion-panel-details";
import ExpansionPanelSummary from "@bit/mui-org.material-ui.expansion-panel-summary";
import Typography from "@bit/mui-org.material-ui.typography";
import ExpandMoreIcon from "@bit/mui-org.material-ui-icons.expand-more";
import docsInfo from '../../../Database/docsInfo';
import Checkbox from "@bit/mui-org.material-ui.checkbox";
import Button from "@bit/mui-org.material-ui.button";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const styles = theme => ({
  root: {
    width: '100%'
  },
  expansionPanel: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    flexBasis: '85%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(18),
    color: theme.palette.text.secondary
  },
  about: {
    fontSize: theme.typography.pxToRem(15),
  }
});

class DocsPicker extends React.Component {
  state = {
    expanded: null,
    checked: this.props.pickedDocs,
  };

  handleToggle = (index) => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(index);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(index);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
    this.props.callbackPickedDocs([...newChecked]);
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    const expansionPanels = docsInfo.map( (doc) => {
      const index = docsInfo.indexOf(doc);
      return(
        <Container>
          <Row>
            <Col md={{ span: 11}}>
              <ExpansionPanel 
                expanded={expanded === `panel${index}`} 
                onChange={this.handleChange(`panel${index}`)}
                className={classes.expansionPanel}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>{doc.name}</Typography>
                  <Typography className={classes.secondaryHeading}>{doc.price} ₽</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography className={classes.about}>{doc.about.info}</Typography>
                  <Typography className={classes.about}>
                    <ul>
                      {doc.about.requiredDocs.map( (requiredDoc) => <li>{requiredDoc}</li>)}
                    </ul>
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Col>
            <Col>
              <ExpansionPanel align="center" expanded="false" className={classes.expansionPanel}>
                <Checkbox
                  onChange={this.handleToggle(index)}
                  checked={this.state.checked.indexOf(index) !== -1}
                />
              </ExpansionPanel>
              
            </Col>
          </Row>
        </Container>
      )
    });

    return (
      <div className={classes.root}>
        {expansionPanels}
      </div>
    )
  }
}

DocsPicker.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DocsPicker);
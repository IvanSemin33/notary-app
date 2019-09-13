import React from 'react';
import PropTypes from 'prop-types';
import Firebase from 'firebase';
import Divider from '@material-ui/core/Divider';
import { withStyles } from "@bit/mui-org.material-ui.styles";
// import docsInfo from '../../../../Database/docsInfo';
import Checkbox from "@bit/mui-org.material-ui.checkbox";
import Button from "@bit/mui-org.material-ui.button";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';


const styles = theme => ({
  root: {
    width: '100%'
  },
  checkbox: {
    width: '20%'
  },
  listItem: {
    width: '100%'
  }
});

class DocsPicker extends React.Component {
  state = {
    checked: this.props.pickedDocs,
    docsInfo: []
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

  componentWillMount() {
    let ref = Firebase.database().ref(`/docs-info`);
    ref.on("value", snapshot => {
      const docsInfo = snapshot.val();
      this.setState({docsInfo});
      console.log(docsInfo);
    });
  }

  render() {
    const { classes } = this.props;

    return(  
      <List dense className={classes.root}>
        <ListItem key={333} divider>
          <Grid container
            className={classes.listItem}
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item style={{width: '75%'}}>
              <ListItemText id={333} primary={`ДОКУМЕНТ`} />
            </Grid>
            <Grid item style={{width: '20%'}}>
              <ListItemText id={333} primary={`ЦЕНА`} />
            </Grid>
            <Grid item style={{width: '5%'}}>
              <ListItemText id={333} primary={`ВЫБРАТЬ`} />
            </Grid>
          </Grid>
        </ListItem>
        {this.state.docsInfo.map( (doc) => {
          const index = this.state.docsInfo.indexOf(doc);
          return(
            <div key='list'>
              <ListItem key={index} button divider>
                <Grid container
                  className={classes.listItem}
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item style={{width: '75%'}}>
                    <ListItemText id={index} primary={`${doc.name}`} />
                  </Grid>
                  <Grid item style={{width: '20%'}}>
                    <ListItemText id={index} primary={`${doc.price}`} />
                  </Grid>
                  <Grid item style={{width: '5%'}}>
                    <ListItemSecondaryAction>
                      <Checkbox
                        edge="end"
                        onChange={this.handleToggle(index)}
                        checked={this.state.checked.indexOf(index) !== -1}
                        inputProps={{ 'aria-labelledby': index }}
                      />
                    </ListItemSecondaryAction>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider />
            </div>
            )
          })
        }
      </List>)
  };
};

DocsPicker.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DocsPicker);

            // <Paper>
            // <Grid container
            //   className={classes.root}
            //   direction="row"
            //   justify="center"
            //   alignItems="center"
            // >
            //   <Grid item className={classes.panel}>
            //         <Typography className={classes.heading}>{doc.name}</Typography>
            //         <Typography className={classes.secondaryHeading}>{doc.price}</Typography>
      
            //   </Grid>
            //   <Grid item className={classes.checkbox}>
            //         <Checkbox
            //           onChange={this.handleToggle(index)}
            //           checked={this.state.checked.indexOf(index) !== -1}
            //         />
            //   </Grid>
            // </Grid>
            // </Paper>
          // )

    
    
    
    // docsInfo.map( (doc) => {
    //   const index = docsInfo.indexOf(doc);
    //   return(
    //     <Paper>
    //     <Grid container
    //       className={classes.root}
    //       direction="row"
    //       justify="center"
    //       alignItems="center"
    //     >
    //       <Grid item className={classes.panel}>
    //             <Typography className={classes.heading}>{doc.name}</Typography>
    //             <Typography className={classes.secondaryHeading}>{doc.price}</Typography>
  
    //       </Grid>
    //       <Grid item className={classes.checkbox}>
    //             <Checkbox
    //               onChange={this.handleToggle(index)}
    //               checked={this.state.checked.indexOf(index) !== -1}
    //             />
    //       </Grid>
    //     </Grid>
    //     </Paper>

    //   )
//     });
//   }
// }



//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////|DOCS WITH PRICE|///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from "@bit/mui-org.material-ui.styles";
// import ExpansionPanel from "@bit/mui-org.material-ui.expansion-panel";
// import ExpansionPanelDetails from "@bit/mui-org.material-ui.expansion-panel-details";
// import ExpansionPanelSummary from "@bit/mui-org.material-ui.expansion-panel-summary";
// import Typography from "@bit/mui-org.material-ui.typography";
// import ExpandMoreIcon from "@bit/mui-org.material-ui-icons.expand-more";
// import docsInfo from '../../../Database/docsInfo';
// import Checkbox from "@bit/mui-org.material-ui.checkbox";
// import Button from "@bit/mui-org.material-ui.button";
// import Grid from '@material-ui/core/Grid';


// const styles = theme => ({
//   root: {
//     width: '100%'
//   },
//   panel: {
//     width: '80%'
//   },
//   expansionPanel: {
//     width: '100%'
//   },
//   checkbox: {
//     width: '20%'
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(16),
//     flexBasis: '60%',
//     flexShrink: 0
//   },
//   secondaryHeading: {
//     fontSize: theme.typography.pxToRem(16),
//     color: theme.palette.text.secondary
//   },
//   about: {
//     fontSize: theme.typography.pxToRem(14),
//   }
// });

// class DocsPicker extends React.Component {
//   state = {
//     expanded: null,
//     checked: this.props.pickedDocs,
//   };

//   handleToggle = (index) => () => {
//     const { checked } = this.state;
//     const currentIndex = checked.indexOf(index);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(index);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     this.setState({
//       checked: newChecked
//     });
//     this.props.callbackPickedDocs([...newChecked]);
//   };

//   handleChange = panel => (event, expanded) => {
//     this.setState({
//       expanded: expanded ? panel : false
//     });
//   };

//   render() {
//     const { classes } = this.props;
//     const { expanded } = this.state;
//     return docsInfo.map( (doc) => {
//       const index = docsInfo.indexOf(doc);
//       return(
//         <Grid container
//           className={classes.root}
//           direction="row"
//           justify="center"
//           alignItems="center"
//         >
//           <Grid item className={classes.panel}>
//             <ExpansionPanel 
//               expanded={expanded === `panel${index}`} 
//               onChange={this.handleChange(`panel${index}`)}
//               className={classes.expansionPanel}
//             >
//               <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//                 <Typography className={classes.heading}>{doc.name}</Typography>
//                 <Typography className={classes.secondaryHeading}>{doc.price}₽</Typography>
//               </ExpansionPanelSummary>
//               <ExpansionPanelDetails>
//                 <Typography className={classes.about}>{doc.about.info}</Typography>
//                 <Typography className={classes.about}>
//                   <ul>
//                     {doc.about.requiredDocs.map( (requiredDoc) => <li key={requiredDoc}>{requiredDoc}</li>)}
//                   </ul>
//                 </Typography>
//               </ExpansionPanelDetails>
//             </ExpansionPanel>
//           </Grid>
//           <Grid item className={classes.checkbox}>
//             <ExpansionPanel align="center" expanded="false" className={classes.expansionPanel}>
//                 <Checkbox
//                   onChange={this.handleToggle(index)}
//                   checked={this.state.checked.indexOf(index) !== -1}
//                 />
//             </ExpansionPanel>
//           </Grid>
//         </Grid>
//       )
//     });
//   }
// }

// DocsPicker.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(DocsPicker);
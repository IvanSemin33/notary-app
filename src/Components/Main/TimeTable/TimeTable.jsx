import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from "@bit/mui-org.material-ui.typography";
import Grid from '@material-ui/core/Grid';


class TimeTable extends React.Component {
    render() {
        return(
            <Grid container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={3}
                
            >
                <Grid item>
                    <Typography variant="h4">График приёма граждан</Typography>
                </Grid>
                <Grid item>
                    <Table size="small">
                        <TableBody>
                            <TableRow>
                                <TableCell>Понедельник</TableCell>
                                <TableCell>9:00 - 12:00, 13:00 - 16:00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Вторник</TableCell>
                                <TableCell>9:00 - 12:00, 13:00 - 16:00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Среда</TableCell>
                                <TableCell>9:00 - 12:00, 13:00 - 16:00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Четверг</TableCell>
                                <TableCell>9:00 - 12:00, 13:00 - 16:00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Пятница</TableCell>
                                <TableCell>9:00 - 12:00, 13:00 - 15:00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Суббота</TableCell>
                                <TableCell>Неприёмный день</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Воскресенье</TableCell>
                                <TableCell>Неприёмный день</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        )
    }
}
export default TimeTable;

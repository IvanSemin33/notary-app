import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import notarySelfi from '../../../images/notarySelfi.jpg'
import helperSelfi from '../../../images/helperSelfi.png'

class NotaryInfo extends React.Component {

    render() {
        return(
            <Grid container
                direction="column"
                justify="space-around"
                alignItems="flex-start"
                spacing={5}
                wrap="nowrap"
            >
                <Grid item>
                    <Typography variant="h4">Для Вас работают</Typography>
                </Grid>
                <Grid item>
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item>
                            <img
                                width={105}
                                height={133}
                                className="mr-3"
                                src={notarySelfi}
                                alt="notarySelfi"
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">Семина Ольга Алексеевна</Typography>
                            <Typography variant="subtitle1">Нотариус</Typography>
                            <Typography variant="body1">Лицензия на право нотариальной деятельности № 001915 от 21 мая 1993 г.</Typography>
                            <Typography variant="body1">Приказ о назначении на должность № 100-лс от 18 мая 1993 г.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item>
                            <img
                                width={105}
                                height={133}
                                className="mr-3"
                                src={helperSelfi}
                                alt="helperSelfi"
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">Семина Наталья Геннадьевна</Typography>
                            <Typography variant="subtitle1">Помощник нотариуса</Typography>
                            <Typography variant="body1">с 1 января 2016 г. по настоящее время</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default NotaryInfo;
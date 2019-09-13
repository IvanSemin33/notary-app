import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import notarySelfi from '../../../images/notarySelfi.jpg'
import helperSelfi from '../../../images/helperSelfi.png'

class NotaryInfo extends React.Component {

    render() {
        return(
            <Grid container
                // style={{background: ' linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(185,221,215,1) 19%, rgba(4,133,112,1) 68%, rgba(4,133,112,1) 98%)', width: "100%",     flexGrow: 1,}}
                direction="column"
                justify="center"
                alignItems="flex-start"
                spacing={5}
            >
                <Grid item>
                    <Typography variant="h4">Для Вас работают</Typography>
                </Grid>
                <Grid item>
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                        wrap="nowrap"
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
                            <Typography variant="h6">Нотариус</Typography>
                            <Typography variant="body1">Лицензия на право нотариальной деятельности № 001915 от 21 мая 1993 г.</Typography>
                            <Typography variant="body1">Приказ о назначении на должность № 100-лс от 18 мая 1993 г.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs>
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                        wrap="nowrap"
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
                        <Grid item md>
                            <Typography variant="h5">Семина Наталья Геннадьевна</Typography>
                            <Typography variant="h6">Помощник нотариуса</Typography>
                            <Typography variant="body1">
                                Действующая на основании Выписки из протокола заседания квалификационной комиссии № 2, 
                                выданной Главным управлением Министерства юстиции Российской Федерации по Нижегородской области 17.09.2015 года и 
                                Приказа Главного управления Министерства юстиции Российской Федерации по Нижегородской области № 118 - н от 07.12.2015 года
                            </Typography>
                            <Typography variant="body1">с 1 января 2016 г. по настоящее время</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default NotaryInfo;
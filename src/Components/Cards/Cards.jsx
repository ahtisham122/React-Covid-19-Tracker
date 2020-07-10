import React from 'react';


import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import './Cards.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if(!confirmed) {
        return 'Loading...';
    }

    return (
        <div className="container">
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className="infected">
                    <CardContent className="infectedbg">
                        <Typography variant="h5" gutterBottom>Infected <span aria-label="emoji" role="img">😷</span></Typography>
                        <Typography variant="h3">
                            <CountUp start={0} end={ confirmed.value } duration={2.5} separator=","/>
                        </Typography> 
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="recovered">
                    <CardContent>
                        <Typography variant="h5" gutterBottom>Recovered <span aria-label="emoji" role="img">😊</span></Typography>
                        <Typography variant="h3">
                            <CountUp start={0} end={ recovered.value } duration={2.5} separator=","/>
                        </Typography> 
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recovries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="deaths">
                    <CardContent>
                        <Typography variant="h5" gutterBottom>Deaths <span aria-label="emoji" role="img">😢</span></Typography>
                        <Typography variant="h3">
                            <CountUp start={0} end={ deaths.value } duration={2.5} separator=","/>
                        </Typography> 
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths from COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
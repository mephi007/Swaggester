import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormCard from './FormCard'
import useWindowPosition from '../hook/useWindowPosition'


const useStyles = makeStyles((theme) => ({
    root:{
        // minHeight: '100vh',
        height:'25vh',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        [theme.breakpoints.down('md')]:{
            flexDirection : 'column'
        },
        width: '80%',
        marginBottom:'20%',
        marginTop:'10%'

    }
}));
export default function LandingForm () {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
        <div className ={classes.root} id="landing-form">
            <FormCard checked={checked}/>
        </div>
    );
}
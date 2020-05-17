import React from 'react'
import {Link} from 'react-router-dom'
import firebase from '../config/firebaseConf'

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
    palette : {
        background : {
            default : '#839B9A'
        }
    }
})
const useStyles = makeStyles((theme) =>({
    root : {
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    cardWidth :{
        width : 350
    },
    inputField : {
        marginBottom: theme.spacing(3),
        width: '100%',
        alignContent : 'center',
        // border : '2px solid black'
    },
    buttonCont : {
		marginBottom : 20,
	},
    buttonStyle: {
        height : 45,
        background: '#717C7C',
        color : "white",
        '&:hover': {
            backgroundColor: '#616161',
        }
    }
}));

// console.log(theme)/
function Login() {
    const classes = useStyles();
    const [login, setLogin] = React.useState({
        email : '',
        password : '',
        login_err : ''
    });
    
    const onINputsChange = (event) =>{
        let att = event.target.name;
        let val = event.target.value;
        if(att === 'email'){
            setLogin({
                ...login,
                email : val
            });
        }
        else if(att === 'password'){
            setLogin({
                ...login,
                password : val
            });
        }
        else{
            return 0;
        }
    }

    const onLogin = () =>{
        console.log(login['email'], login['password']);
        firebase.auth().signInWithEmailAndPassword(login['email'], login['password']).then(response =>{
            console.log('login success', response);
            return window.location.assign('/sales_summary');
        }).catch(err =>{
            console.log('login error', err);
            return setLogin({...login, login_err : 'Invalid username or password'});
        })
    }
    return (
        <div className={classes.root}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <Grid container spacing={3}>
                    <Card className={classes.cardWidth}>
                        <CardContent>
                            <h2>Login</h2>
                            <TextField 
                                label="Email"
                                className={classes.inputField}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                                name="email"
                                onBlur={onINputsChange} />
                                <br/>
                            <TextField 
                                label="Password"
                                className={classes.inputField}
                                type = "password"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <VpnKeyRoundedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                name="password"
                                onBlur={onINputsChange} />

                                <div className={classes.buttonCont}>
                                    <Button onClick={onLogin} variant="contained" className={classes.buttonStyle} fullWidth>
                                        Login
                                    </Button>
                                    <Typography style={{textAlign: 'center', fontSize: 13, color: 'red'}}>{login['login_err']}</Typography>
                                </div>

                                <Link to="/register">
                                    <font>No account? Signup here</font>
                                </Link>
                        </CardContent>
                    </Card>
                </Grid>
            </MuiThemeProvider>
        </div>
    )
}

export default Login

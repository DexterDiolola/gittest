import React from 'react'
import {Link} from 'react-router-dom'

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
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import ConfirmationNumberRoundedIcon from '@material-ui/icons/ConfirmationNumberRounded';
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

function Register() {
	const classes = useStyles();
	const [inputVals, setinputVals] = React.useState({
		email : null,
		email_err : false,
		email_err_msg : '',
		account_name : null,
		account_name_err : false,
		account_name_err_msg : '',
		password : null,
		password_err : false,
		password_err_msg : '',
		v_password : null,
		v_password_err : false,
		v_password_err_msg : ''
	});
	const onInputsChange = (event) =>{
		let att = event.target.name;
		let val = event.target.value;
		if(att === 'email'){
			if(/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(val) === false){
				setinputVals({
					...inputVals, 
					email : val,
					email_err : true, 
					email_err_msg : 'Invalid email address.'
				});
				console.log('invalid email')
			}
			else{
				setinputVals({
					...inputVals,
					email : val,
					email_err : false, 
					email_err_msg : ''
				});
			}
		}
		else if(att === 'account_name'){
			setinputVals({...inputVals, account_name : val});
			if(val === ''){
				setinputVals({
					...inputVals,
					account_name : val,
					account_name_err : true, 
					account_name_err_msg : 'This field is required.'
				});
			}
			else{
				setinputVals({
					...inputVals,
					account_name : val,
					account_name_err : false, 
					account_name_err_msg : ''
				});
			}
		}
		else if(att === 'password'){
			if(val === '' || val.length <= 5){
				return setinputVals({
					...inputVals,
					password : val, 
					password_err : true, 
					password_err_msg : 'Passwords must contain atleast 6 characters.'
				});
			}
			else{
				return setinputVals({
					...inputVals,
					password : val,
					password_err : false, 
					password_err_msg : ''
				});
			}
		}
		else if(att === 'v_password'){
			if(val !== inputVals['password']){
				return setinputVals({
					...inputVals,
					v_password : val,
					v_password_err : true, 
					v_password_err_msg : 'Passwords not matched.'
				});
			}
			else{
				return setinputVals({
					...inputVals,
					v_password : val,
					v_password_err : false, 
					v_password_err_msg : ''
				});
			}
		}
		else{
			return 0
		}
	}
	const onLogin = () =>{
		console.log(inputVals);
		let isValid = !inputVals['email_err'] && !inputVals['account_name_err'] && !inputVals['password_err'] && !inputVals['v_password_err'];
		if(isValid === false){
			return 0;
		}
		alert('Proceed to auth');
	}
	return (
		<div className={classes.root}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline/>
				<Grid container spacing={3}>
					<Card className={classes.cardWidth}>
						<CardContent>
							<h2>Register</h2>
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
								name={'email'}
								error={inputVals['email_err']}
								helperText={inputVals['email_err_msg']}
								onBlur={onInputsChange}
							/>
							<br/>
							<TextField 
								label="Account Name"
								className={classes.inputField}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<FaceRoundedIcon />
										</InputAdornment>
									),
								}}
								name={'account_name'}
								error={inputVals['account_name_err']}
								helperText={inputVals['account_name_err_msg']}
								onBlur={onInputsChange}
							/>
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
								name={'password'}
								error={inputVals['password_err']}
								helperText={inputVals['password_err_msg']}
								onBlur={onInputsChange}
							/>
							<br/>
							<TextField 
								label="Verify Password"
								className={classes.inputField}
								type = "password"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<ConfirmationNumberRoundedIcon />
										</InputAdornment>
									),
								}}
								name={'v_password'}
								error={inputVals['v_password_err']}
								helperText={inputVals['v_password_err_msg']}
								onBlur={onInputsChange}
							/>

							<div className={classes.buttonCont}>
								<Button onClick={onLogin} variant="contained" className={classes.buttonStyle} fullWidth>
									Register
								</Button>
								<Typography style={{textAlign: 'center', fontSize: 13, color: 'red'}}>{'Error Message from server'}</Typography>
							</div>

							<Link to="/login">
								<font>Already have account? Signin here</font>
							</Link>
						</CardContent>
					</Card>
				</Grid>
			</MuiThemeProvider>
		</div>
	)
}

export default Register

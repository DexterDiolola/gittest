import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import { createBrowserHistory } from "history";

const useStyles = makeStyles((theme) => ({
  container: {
	display: 'inline',
	flexWrap: 'wrap',
  },
  startDate: {
	marginLeft: theme.spacing(1),
	marginRight: theme.spacing(1),
	width: 200,
	name : 'startDate'
  },
  endDate: {
	marginLeft: theme.spacing(1),
	marginRight: theme.spacing(1),
	width: 200,
	name : 'endDate'
  },
}));

// const hist = createBrowserHistory();

export default function DatePickers() {
	const classes = useStyles();
	const currentDate = () =>{
		let today = new Date();
		let dd = String(today.getDate()).padStart(2, '0');
		let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		let yyyy = today.getFullYear();
		return yyyy + '-' + mm + '-' + dd;
	}
	const onStartDateChange = () =>{
		// hist.push('/foo');
		console.log('foo');
	}

	return (
		<>
			<form className={classes.container} noValidate onChange={onStartDateChange}>
				<TextField
					id="date"
					label="Start Date"
					type="date"
					defaultValue={currentDate()}
					className={classes.startDate}
					InputLabelProps={{
					shrink: true,
				}}
				/>
			</form>
			<form className={classes.container} noValidate>
				<TextField
					id="date"
					label="End Date"
					type="date"
					defaultValue={currentDate()}
					className={classes.endDate}
					InputLabelProps={{
					shrink: true,
				}}
				/>
			</form>
		</>
	);
}

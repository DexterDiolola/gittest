import React from 'react';
import clsx from 'clsx';
import {Link} from 'react-router-dom'
import firebase from '../../config/firebaseConf'

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import GroupIcon from '@material-ui/icons/Group';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';


const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	navBarColor :{
		background : 'linear-gradient(45deg, #616161 30%, #9bc5c3 90%)'
	},
	sideBarColor : {
		background : 'linear-gradient(45deg, #616161 30%, #9bc5c3 90%)',
		color : 'white'
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	navBurger: {
		marginRight: 20,
	},
	avatarSize: {
		width: theme.spacing(5),
		height: theme.spacing(5),
		fontSize: 15,
		fontWeight : 600
	},
	avatarMenu: {
		fontSize : 14
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1,
		},
	},
	navIdentity: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		justifyContent : 'center',
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	contentContainer: {
		flexGrow: 1,
		padding: theme.spacing(3)
	},
	content: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
}));

export default function NavBar({...props}) {
	const classes = useStyles();
	const [collapse, setCollapse] = React.useState(true);
	const [avatarMenu, setAvatarMenu] = React.useState(null);
	const [subMenuOpen, setSubMenuOpen] = React.useState(false);
	const [selectedNav, setSelectedNav] = React.useState(-1);
	const [selectedChildNav, setSelectedChildNav] = React.useState(-1);

	const onSidebarCollapse = () => {
		collapse === false ? setCollapse(true) : setCollapse(false)
	};

	const onAvatarMenuClicked = (e) =>{
		setAvatarMenu(e.currentTarget)
	}

	const onAvatarMenuClose = () =>{
		setAvatarMenu(null)
	}

	const onSubMenuToggle = (e, idx) =>{
		setSelectedNav(idx);
		setSelectedChildNav(-1);
		setSubMenuOpen(!subMenuOpen);
	}

	const onSelectedNav = (e, idx) =>{
		setSelectedNav(idx);
		setSelectedChildNav(-1);
	}

	const onSelectedChildNav = (e, idx, cidx) =>{
		setSelectedChildNav(cidx);
		setSelectedNav(idx);
	}
	
	const onLogout = () =>{
		return firebase.auth().signOut();
		// return props.changeStateWhenLogout();
	}

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: collapse,
				})}>
				<Toolbar className={classes.navBarColor}>
					<IconButton onClick={onSidebarCollapse} color="inherit" edge="start" className={classes.navBurger}>
						{collapse === false ? <MenuIcon /> : <MoreVertRoundedIcon/>}
					</IconButton>
					<Typography variant="h6" noWrap style={{flex : 1}}>
						Sales Summary
					</Typography>
					<Button size="small" onClick={onAvatarMenuClicked}>
						<Avatar className={classes.avatarSize}>DD</Avatar>
						<ExpandMoreRoundedIcon style={{color: "white"}} />
					</Button> &nbsp;
					<Menu
						anchorEl={avatarMenu}
						keepMounted
						open={Boolean(avatarMenu)}
						onClose={onAvatarMenuClose}
					>
						<MenuItem size="small" className={classes.avatarMenu} onClick={onAvatarMenuClose}>Profile</MenuItem>
						<MenuItem size="small" className={classes.avatarMenu} onClick={onAvatarMenuClose}>My account</MenuItem>
						<MenuItem size="small" className={classes.avatarMenu} onClick={onLogout}>Logout</MenuItem>
					</Menu>
					<font>Dexter Diolola (Admin)</font>
					{/* <Button onClick={onLogout} color="inherit">Logout</Button> */}
				</Toolbar>
	  		</AppBar>
			
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: collapse,
					[classes.drawerClose]: !collapse,
				  })}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: collapse,
						[classes.drawerClose]: !collapse,
						[classes.sideBarColor] : true
					}),
				}}>
				<div className={classes.navIdentity}>
					<Typography variant="h5" noWrap>
						POSWIZ
					</Typography>
				</div>
				<Divider />
				<List>
					
					<ListItem button key={"Sales"} onClick={(e)=>onSubMenuToggle(e, 0)} selected={selectedNav === 0}>
						<ListItemIcon>{<MonetizationOnRoundedIcon style={{color: "white"}} />}</ListItemIcon>
						<ListItemText primary={"Sales"} />
						{subMenuOpen ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
					</ListItem>
					<Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<Link to="sales_summary" style={{ textDecoration: 'none', color : 'inherit' }}>
								<ListItem button className={classes.nested} selected={selectedChildNav === 0} onClick={(e)=>onSelectedChildNav(e, 0, 0)}>
									<ListItemIcon>
										<ChevronRightRoundedIcon style={{color: "white"}} />
									</ListItemIcon>
									<ListItemText primary="Sales Summary" />
								</ListItem>
							</Link>
							
							<Link to="sales_by_item" style={{ textDecoration: 'none', color : 'inherit' }}>
								<ListItem button className={classes.nested} selected={selectedChildNav === 1} onClick={(e)=>onSelectedChildNav(e, 0, 1)}>
									<ListItemIcon>
										<ChevronRightRoundedIcon style={{color: "white"}} />
									</ListItemIcon>
									<ListItemText primary="Sales By Item" />
								</ListItem>
							</Link>

							<Link to="sales_by_cat" style={{ textDecoration: 'none', color : 'inherit' }}>
								<ListItem button className={classes.nested} selected={selectedChildNav === 2} onClick={(e)=>onSelectedChildNav(e, 0, 2)}>
									<ListItemIcon>
										<ChevronRightRoundedIcon style={{color: "white"}} />
									</ListItemIcon>
									<ListItemText primary="Sales By Category" />
								</ListItem>
							</Link>
							
							<Link to="sales_by_pt" style={{ textDecoration: 'none', color : 'inherit' }}>
								<ListItem button className={classes.nested}>
									<ListItemIcon>
										<ChevronRightRoundedIcon style={{color: "white"}} />
									</ListItemIcon>
									<ListItemText primary="Sales By Payment Type" />
								</ListItem>
							</Link>
						</List>
					</Collapse>
				
					<Divider />
				
					<ListItem button key={"Items"} selected={selectedNav === 1} onClick={(e) => onSelectedNav(e, 1)}>
						<ListItemIcon>{<ShoppingCartIcon style={{color: "white"}}/>}</ListItemIcon>
						<ListItemText primary={"Items"} />
					</ListItem>

					<Divider />
				
					<ListItem button key={"Employee List"} selected={selectedNav === 2} onClick={(e) => onSelectedNav(e, 2)}>
						<ListItemIcon>{<SupervisorAccountIcon style={{color: "white"}}/>}</ListItemIcon>
						<ListItemText primary={"Employee List"} />
					</ListItem>

					<Divider />
				
					<ListItem button key={"Access Rights"} selected={selectedNav === 3} onClick={(e) => onSelectedNav(e, 3)}>
						<ListItemIcon>{<AccessibilityIcon style={{color: "white"}}/>}</ListItemIcon>
						<ListItemText primary={"Access Rights"} />
					</ListItem>

					<Divider />
				
					<ListItem button key={"Customers"} selected={selectedNav === 4} onClick={(e) => onSelectedNav(e, 4)}>
						<ListItemIcon>{<GroupIcon style={{color: "white"}}/>}</ListItemIcon>
						<ListItemText primary={"Customers"} />
					</ListItem>

					<Divider />
				
					<ListItem button key={"General Settings"} selected={selectedNav === 5} onClick={(e) => onSelectedNav(e, 5)}>
						<ListItemIcon>{<PermIdentityIcon style={{color: "white"}}/>}</ListItemIcon>
						<ListItemText primary={"General Settings"} />
					</ListItem>
				</List>
			</Drawer>
			<main className={classes.contentContainer}>
				<div className={classes.content}/>
				{props.child}
			</main>
		</div>
	);
}

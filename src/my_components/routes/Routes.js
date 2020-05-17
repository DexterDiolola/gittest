import React, { Fragment } from 'react'
import { Switch, Route, BrowserRouter} from 'react-router-dom'

import Login from '../pages/Login'
import Register from '../pages/Register'
import SalesSummary from '../pages/SalesSummary'
import SalesByItem from '../pages/SalesByItem'
import SalesByCategory from '../pages/SalesByCategory'
import ErrorPage from '../pages/ErrorPage'
import Main from '../pages/Main'

function Routes() {
	return (
		<Fragment>
			<BrowserRouter>
				<Switch>
					<Route exact path={"/"} component={Login} /> 
					<Route path={"/login"} component={Login} />
					<Route path={"/register"} component={Register} />
					<Route path={"/sales_summary"} render={() => <Main children={<SalesSummary/>}/>} />
					<Route path={"/sales_by_item"} render={() => <Main children={<SalesByItem/>}/>} />
					<Route path={"/sales_by_cat"} render={() => <Main children={<SalesByCategory/>}/>} />
					<Route path={"*"} component={ErrorPage} />
				</Switch>
			</BrowserRouter>
		</Fragment>
	)
}

export default Routes

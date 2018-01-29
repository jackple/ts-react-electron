import * as React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Error from './../components/Error'
import Home from './../views/Home'
import Login from './../views/Login'

// 权限控制
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            false ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
)

const App = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute exact path="/home" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route component={Error} />
            </Switch>
        </div>
    </Router>
)

export default App

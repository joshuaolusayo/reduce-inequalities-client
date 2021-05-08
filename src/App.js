import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// Components
import { ProtectedRoute } from "./ProtectedRoute";
import UserLogin from "./Components/Auth/Login";
import UserSignUp from "./Components/Auth/SignUp";
import Homepage from "./Components/Homepage";
import BlogHomepage from "./Components/Blog/Homepage";
import BlogArticle from "./Components/Blog/Article";
import Scholarship from "./Components/Application/Scholarship";
import Empowerment from "./Components/Application/Empowerment";
import Job from "./Components/Application/Job";
import Profile from "./Components/Profile";
import AdminLogin from "./Components/Admin/Login";
import Dashboard from "./Components/Admin/Dashboard";
import UserDetails from "./Components/Admin/User";
import ArticleDetails from "./Components/Admin/Article";

import "antd/dist/antd.css";
import "./styles.css";

function App(props) {
	const isAuthenticated = localStorage.getItem("isAuthenticated");
	
	console.log(localStorage.getItem("isAuthenticated"));
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/login" render={(props) => (isAuthenticated ? <Redirect to="/" /> : <UserLogin {...props} />)} />
				<Route exact path="/signup" render={(props) => (isAuthenticated ? <Redirect to="/" /> : <UserSignUp {...props} />)} />
				<ProtectedRoute exact path="/" component={Homepage} />
				<ProtectedRoute exact path="/blog" component={BlogHomepage} />
				<ProtectedRoute exact path="/blog/article" component={BlogArticle} />
				<ProtectedRoute exact path="/scholarship" component={Scholarship} />
				<ProtectedRoute exact path="/empowerment" component={Empowerment} />
				<ProtectedRoute exact path="/job" component={Job} />
				<ProtectedRoute exact path="/profile" component={Profile} />
				<ProtectedRoute exact path="/admin/login" component={AdminLogin} />
				<ProtectedRoute exact path="/admin/dashboard" component={Dashboard} />
				<ProtectedRoute exact path="/admin/user" component={UserDetails} />
				<ProtectedRoute exact path="/admin/article" component={ArticleDetails} />
			</Switch>
		</BrowserRouter>
	);
}

const mapStateToProps = (state) => ({
	auth: state.user.auth,
});

export default connect(mapStateToProps)(App);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// Components
import UserLogin from "./Components/Auth/Login";
import UserSignUp from "./Components/Auth/SignUp";
import Header from "./Components/Homepage";
import BlogHomepage from "./Components/Blog/Homepage";
import BlogArticle from "./Components/Blog/Article";
import Scholarship from "./Components/Application/Scholarship";
import Empowerment from "./Components/Application/Empowerment";
import Job from "./Components/Application/Job";
import Profile from "./Components/Profile";

import "antd/dist/antd.css";
import "./styles.css";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Route exact path="/login" component={UserLogin} />
			<Route exact path="/signUp" component={UserSignUp} />
			<Route exact path="/" component={Header} />
			<Route exact path="/blog" component={BlogHomepage} />
			<Route exact path="/blog/article" component={BlogArticle} />
			<Route exact path="/scholarship" component={Scholarship} />
			<Route exact path="/empowerment" component={Empowerment} />
			<Route exact path="/job" component={Job} />
			<Route exact path="/profile" component={Profile} />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

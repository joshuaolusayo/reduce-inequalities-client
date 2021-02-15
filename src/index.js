import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// Components
import UserLogin from "./Components/Login";
import UserSignUp from "./Components/SignUp";
import Header from "./Components/Homepage";
import BlogHomepage from "./Components/Blog/Homepage";
import BlogArticle from "./Components/Blog/Article";

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
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

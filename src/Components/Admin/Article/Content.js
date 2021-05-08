import React from "react";
import Menu from "../Menu";
import AllArticles from "./AllArticles";

const Content = () => {
	return (
		<div className="content container-fluid">
			<div className="container">
                <div className="row justify-content-between">
                    <Menu />
                    <AllArticles />
                </div>
            </div>
		</div>
	);
};

export default Content;

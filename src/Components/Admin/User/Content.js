import React from "react";
import Menu from "../Menu";
import Details from "./Details";

const Content = () => {
	return (
		<div className="content container-fluid">
			<div className="container">
                <div className="row justify-content-between">
                    <Menu />
                    <Details />
                </div>
            </div>
		</div>
	);
};

export default Content;

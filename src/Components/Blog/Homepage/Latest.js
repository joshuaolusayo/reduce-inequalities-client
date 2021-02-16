import React from "react";
import { Row, Divider } from "antd";
import ApplicationInfo from "./ApplicationInfo";
import Featured from "./Featured";

const Latest = () => {
	return (
		<div className="latest container-fluid pt-md-5">
			<div className="container mx-auto px-0">
				<Row className="pt-5 pb-md-5 px-0">
					<ApplicationInfo />
					<Featured />
				</Row>
			</div>
			<Divider className="my-0 my-md-auto" />
		</div>
	);
};

export default Latest;

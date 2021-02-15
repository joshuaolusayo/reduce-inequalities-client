import React from "react";
import { Row, Divider } from "antd";
import ApplicationInfo from "./ApplicationInfo";
import Featured from "./Featured";

const Latest = () => {
	return (
		<div className="latest container-fluid py-5">
			<div className="container mx-auto px-0">
				<Row className="py-5 px-0">
					<ApplicationInfo />
					<Featured />
				</Row>
			</div>
			<Divider />
		</div>
	);
};

export default Latest;

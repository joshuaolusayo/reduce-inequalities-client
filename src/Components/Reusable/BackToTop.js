import React from "react";
import { BackTop } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

const style = {
	height: 40,
	width: 40,
	lineHeight: "40px",
	borderRadius: 4,
	backgroundColor: "#008000",
	color: "#fff",
	textAlign: "center",
	fontSize: 16,
};

const styleArrow = {
	position: "relative",
	top: -3,
};

const BackToTop = () => {
	return (
		<>
			<BackTop>
				<div style={style}>
					<ArrowUpOutlined style={styleArrow} />
				</div>
			</BackTop>
		</>
	);
};

export default BackToTop;

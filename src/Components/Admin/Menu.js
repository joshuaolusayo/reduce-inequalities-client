import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserOutlined, ReadOutlined, ForkOutlined, InboxOutlined, GlobalOutlined, HomeOutlined } from "@ant-design/icons";

const Menu = () => {
	const [hide, setHide] = useState(true);
	const location = useLocation();

	useEffect(() => {}, [location]);

	return (
		<div className="col-2 col-lg-3 px-lg-0 menu">
			<button className={`abs btn bg-pry text-light ${hide ? "d-block" : "d-none"} d-lg-none `} onClick={() => setHide(false)}>
				Menu
			</button>
			<div
				className={`d-lg-flex flex-column justify-content-start align-items-start px-3 py-lg-5 mr-lg-4 menu__bar ${
					hide ? "d-none" : "p-abs d-block"
				}`}
			>
				<Link
					className={`mb-lg-4 w-100 py-3 d-flex align-items-center ${
						location.pathname === "/admin/dashboard" ? "active" : ""
					}`}
					to="/admin/dashboard"
				>
					<HomeOutlined className="col-2 col-lg-3" />
					<span className="col-10 col-lg-9">Dashboard</span>
				</Link>

				<Link
					className={`mb-lg-4 w-100 py-3 d-flex align-items-center ${
						location.pathname === "/admin/user" ? "active" : ""
					}`}
					to="/admin/user"
				>
					<UserOutlined className="col-2 col-lg-3" />
					<span className="col-10 col-lg-9">User</span>
				</Link>

				<Link
					className={`mb-lg-4 w-100 py-3 d-flex align-items-center ${
						location.pathname === "/admin/article" ? "active" : ""
					}`}
					to="/admin/article"
				>
					<ReadOutlined className="col-2 col-lg-3" />
					<span className="col-10 col-lg-9">Articles</span>
				</Link>

				<Link
					className={`mb-lg-4 w-100 py-3 d-flex align-items-center ${
						location.pathname === "/scholarship" ? "active" : ""
					}`}
					to="/admin/dashboard"
				>
					<InboxOutlined className="col-2 col-lg-3" />
					<span className="col-10 col-lg-9">Scholarships</span>
				</Link>
				
				<Link
					className={`mb-lg-4 w-100 py-3 d-flex align-items-center ${
						location.pathname === "/empowerment" ? "active" : ""
					}`}
					to="/admin/dashboard"
				>
					<InboxOutlined className="col-2 col-lg-3" />
					<span className="col-10 col-lg-9">Empowerments</span>
				</Link>

				<Link
					className={`mb-lg-4 w-100 py-3 d-flex align-items-center ${
						location.pathname === "/admin/jobs" ? "active" : ""
					}`}
					to="/admin/dashboard"
				>
					<GlobalOutlined className="col-2 col-lg-3" />
					<span className="col-10 col-lg-9">Jobs</span>
				</Link>

				{/* <div className="dropdown mb-lg-4 w-100 text-left py-3 rounded">
					<button
						className="btn px-0 dropdown-toggle d-block w-100 text-left py-0"
						type="button"
						id="triggerId"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<UserOutlined className="col-2 col-lg-3" />
						<button className="btn bg-transparent text-left col-10 col-lg-9 text-pry">Transaction</button>
					</button>
					<div className="dropdown-menu" aria-labelledby="triggerId">
						<Link to="/" className="dropdown-item" href="#">
							Transaction 1
						</Link>
						<Link to="/" className="dropdown-item" href="#">
							Transaction 2
						</Link>
					</div>
				</div> */}

				<button className="btn txt-red text-right d-block d-lg-none w-100 pr-5 py-3 mt-5" onClick={() => setHide(true)}>
					Close
				</button>
			</div>
		</div>
	);
};

export default Menu;

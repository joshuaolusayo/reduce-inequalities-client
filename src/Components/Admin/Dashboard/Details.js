import React from "react";
import {Link} from "react-router-dom"

const Details = () => {
	return (
		<div className="col-lg-9 dashboard py-lg-5 px-lg-5">
			<h2 className="font-weight-bold mb-4 mb-lg-5">Dashboard</h2>
			<div className="row px-lg-3">
				<div className="col-12 col-md-6 col-xl-4 p-4 d-flex justify-content-between align-items-center shadow mb-4 mb-lg-5">
					<Link to="/admin/dashboard" className="text-uppercase font-weight-bold">
						total
						<br />
						users
					</Link>
					<Link to="/admin/dashboard" className="text-muted num">30</Link>
				</div>
				<div className="col-12 col-md-6 col-xl-4 p-4 d-flex justify-content-between align-items-center shadow mb-4 mb-lg-5">
					<Link to="/admin/dashboard" className="text-uppercase font-weight-bold">
						blog
						<br />
						articles
					</Link>
					<Link to="/admin/dashboard" className="text-muted num">30</Link>
				</div>
				<div className="col-12 col-md-6 col-xl-4 p-4 d-flex justify-content-between align-items-center shadow mb-4 mb-lg-5">
					<Link to="/admin/dashboard" className="text-uppercase font-weight-bold">
						availabLe
						<br />
						scholarships
					</Link>
					<Link to="/admin/dashboard" className="text-muted num">30</Link>
				</div>
				<div className="col-12 col-md-6 col-xl-4 p-4 d-flex justify-content-between align-items-center shadow mb-4 mb-lg-5">
					<Link to="/admin/dashboard" className="text-uppercase font-weight-bold">
						availabLe
						<br />
						empowerments
					</Link>
					<Link to="/admin/dashboard" className="text-muted num">30</Link>
				</div>
				<div className="col-12 col-md-6 col-xl-4 p-4 d-flex justify-content-between align-items-center shadow mb-4 mb-lg-5">
					<Link to="/admin/dashboard" className="text-uppercase font-weight-bold">
						availabLe
						<br />
						jobs
					</Link>
					<Link to="/admin/dashboard" className="text-muted num">30</Link>
				</div>
			</div>
		</div>
	);
};

export default Details;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [clicked, setClicked] = useState(false);

	useEffect(() => {
		let body = document.documentElement;
		if (clicked) {
			body.style.overflow = "hidden";
		} else {
			body.style.overflow = "scroll";
		}

		return () => {
			body.style.overflow = "scroll";
		};
	}, [clicked]);

	return (
		<div className="container-fluid header shadow-lg px-0">
			<div className="container navbar-light px-0">
				<nav className="navbar navbar-expand-lg justify-content-between align-items-center py-0">
					<Link className="navbar-brand" to="/">
						<img className="ri-logo" src="/assets/logo-green.png" alt="Reduced Inequalities Logo" />
						<span> Reduced Inequalities</span>
					</Link>
					<button
						className="navbar-toggler d-lg-none"
						type="button"
						data-toggle="collapse"
						data-target="#collapsibleNavId"
						aria-controls="collapsibleNavId"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={() => setClicked(!clicked)}
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
						<ul className="navbar-nav mr-auto mt-lg-0 justify-content-center justify-content-lg-end align-items-center w-100 h-100">
							<li className="nav-item active">
								<Link className="nav-link active mx-4 py-4 text-pry" to="/">
									Homepage
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link mx-4 py-4" to="/">
									Blog
								</Link>
							</li>
							<li className="nav-item dropdown text-center text-lg-auto">
								<Link
									className="nav-link mx-4 py-4 dropdown-toggle"
									to="/"
									id="opportunitiesId"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Opportunities for you
								</Link>
								<div className="dropdown-menu" aria-labelledby="opportunitiesId">
									<Link className="dropdown-item" to="/">
										Scholarships
									</Link>
									<Link className="dropdown-item" to="/">
										Empowerment
									</Link>
									<Link className="dropdown-item" to="/">
										Jobs
									</Link>
								</div>
							</li>
							<li className="nav-item dropdown text-center text-lg-auto">
								<Link
									className="nav-link dropdown-toggle"
									to="/"
									id="profileId"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Profile
								</Link>
								<div className="dropdown-menu" aria-labelledby="profileId">
									<Link className="dropdown-item" to="/">
										View Profile
									</Link>
									<Link className="dropdown-item" to="/">
										Logout
									</Link>
								</div>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Header;

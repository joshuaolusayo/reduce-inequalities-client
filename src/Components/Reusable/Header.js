import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Header = () => {
	const [clicked, setClicked] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const checkScroll = () => {
		if (!scrolled && window.pageYOffset > 300) {
			setScrolled(true);
			console.log("Mounting");
		} else if (scrolled && window.pageYOffset <= 300) {
			setScrolled(false);
		}
	};

	useEffect(() => {
		let body = document.documentElement;
		if (clicked) {
			body.style.overflow = "hidden";
		} else {
			body.style.overflow = "scroll";
		}

		window.addEventListener("scroll", checkScroll);

		return () => {
			body.style.overflow = "scroll";
			window.removeEventListener("scroll", checkScroll);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [clicked, scrolled]);

	return (
		<div className={`container-fluid header shadow-lg px-0 ${scrolled ? "header__fixed" : ""}`} id="header-nav">
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
								<Link className="nav-link mx-4 py-4" to="/blog">
									Blog
								</Link>
							</li>
							<li className="nav-item dropdown text-center text-lg-auto">
								<button
									className="nav-link mx-4 py-4 dropdown-toggle btn"
									id="opportunitiesId"
									data-toggle="dropdown"
									popup="true"
									aria-expanded="false"
								>
									Opportunities for you
								</button>
								<div className="dropdown-menu mx-4" aria-labelledby="opportunitiesId">
									<NavHashLink to="/blog/#scholarships" className="w-100 dropdown-item d-block">
										Scholarships
									</NavHashLink>
									<NavHashLink to="/blog/#empowerment" className="w-100 dropdown-item d-block">
										Empowerment
									</NavHashLink>
									<NavHashLink to="/blog/#jobs" className="w-100 dropdown-item d-block">
										Jobs
									</NavHashLink>
								</div>
							</li>
							<li className="nav-item dropdown text-center text-lg-auto">
								<button
									className="nav-link dropdown-toggle btn"
									to="/"
									id="profileId"
									data-toggle="dropdown"
									popup="true"
									aria-expanded="false"
								>
									Profile
								</button>
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

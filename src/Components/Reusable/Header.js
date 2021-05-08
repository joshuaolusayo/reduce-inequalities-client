import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

let body = document.documentElement;

const Header = () => {
	const [clicked, setClicked] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const checkScroll = () => {
		if (!scrolled && window.pageYOffset > 500) {
			setScrolled(true);
		} else if (scrolled && window.pageYOffset <= 500) {
			setScrolled(false);
		}
	};

	const checkResize = () => {
		if (document.documentElement.clientWidth >= 992 && body.style.overflow === "hidden") {
			body.style.overflow = "scroll";
			setClicked(false);
		}
	};

	const handleLogOut = () => {
		localStorage.clear();
		window.location.pathname = "/login";
	};

	useEffect(() => {
		if (clicked) {
			body.style.overflow = "hidden";
		} else {
			body.style.overflow = "scroll";
		}

		window.addEventListener("scroll", checkScroll);
		window.addEventListener("resize", checkResize);

		return () => {
			body.style.overflow = "scroll";
			window.removeEventListener("scroll", checkScroll);
			window.removeEventListener("resize", checkResize);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [clicked, scrolled, window.location.href]);

	return (
		<div className={`container-fluid header shadow-lg px-0 ${scrolled ? "header__fixed" : ""}`} id="header-nav">
			<div className="container navbar-light px-0">
				<nav className="navbar navbar-expand-lg justify-content-between align-items-center py-0">
					<Link className="navbar-brand" to="/">
						<img loading="lazy" className="ri-logo" src="/assets/logo-green.png" alt="Reduced Inequalities Logo" />
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
						<ul className="navbar-nav mr-auto mt-lg-0 justify-content-lg-end align-items-lg-center w-100 h-100">
							<li className="nav-item">
								<NavLink className="nav-link mx-lg-4 py-4" to="/" activeClassName="active text-pry">
									Homepage
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link mx-lg-4 py-4" activeClassName="active text-pry" to="/blog">
									Blog
								</NavLink>
							</li>
							<li className="nav-item dropdown text-lg-auto">
								<button
									className="nav-link mx-lg-4 py-4 dropdown-toggle btn"
									id="opportunitiesId"
									data-toggle="dropdown"
									popup="true"
									aria-expanded="false"
								>
									Opportunities for you
								</button>
								<div className="dropdown-menu mx-lg-4" aria-labelledby="opportunitiesId">
									<NavHashLink to="/blog/#scholarships" className="w-100 dropdown-item d-block">
										Scholarships
									</NavHashLink>
									<NavHashLink to="/blog/#empowerments" className="w-100 dropdown-item d-block">
										Empowerments
									</NavHashLink>
									<NavHashLink to="/blog/#jobs" className="w-100 dropdown-item d-block">
										Jobs
									</NavHashLink>
								</div>
							</li>
							<li className="nav-item dropdown text-lg-auto last">
								<button
									className="nav-link mx-lg-auto dropdown-toggle btn py-4"
									id="profileId"
									data-toggle="dropdown"
									popup="true"
									aria-expanded="false"
								>
									Profile
								</button>
								<div className="dropdown-menu" aria-labelledby="profileId">
									<Link className="dropdown-item" to="/profile">
										View Profile
									</Link>
									<Link className="dropdown-item" to="/admin/dashboard">
										Dashboard
									</Link>
									<button className="btn dropdown-item" href="#" onClick={handleLogOut}>
										Logout
									</button>
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

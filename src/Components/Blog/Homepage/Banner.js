import React from "react";

const Banner = () => {
	return (
		<div
			className="banner py-5"
			style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/assets/book.jpg")' }}
		>
			<div className="container mx-auto text-center">
				<div className="col-md-10 mx-auto">
					<h3 className="text-light">Welcome to our blog site. Watch out this space for latest scholarships, empowerment programme and job alerts</h3>
				</div>
			</div>
		</div>
	);
};

export default Banner;

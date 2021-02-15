import React from "react";

const Banner = () => {
	return (
		<div
			className="banner py-5"
			style={{ background: 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url("/assets/book.jpg")' }}
		>
			<div className="container mx-auto text-center">
				<div className="col-md-10 mx-auto">
					<h3>Welcome to our blog site. Watch out this space for latest scholarships, empowerment programme and job alerts</h3>
				</div>
			</div>
		</div>
	);
};

export default Banner;

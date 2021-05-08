import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import axios from "axios";

const LogInForm = () => {
	const onFinish = async (values) => {
		axios
			.post("http://localhost:5000/auth/login", values)
			.then((res) => {
				const user = res.data.user;
				localStorage.setItem("token", JSON.stringify(res.data.token));
				localStorage.setItem("user_payload", JSON.stringify(user));
				console.log(localStorage);

				if (user) {
					localStorage.setItem("isAuthenticated", true);
					window.location.pathname = "/";
				}
			})
			.catch((err) => alert(err));
	};

	return (
		<div className="container-fluid registration user-login px-0 px-lg-auto">
			<div className="row mx-0">
				<div
					className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center fixed"
					style={{
						background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/assets/lady-with-phone.jpg")',
					}}
				>
					<h3 className="text-center text-light">Fill the form to register and unlock the pathway to countless opportunities.</h3>
				</div>
				<div className="col-lg-6 registration__form d-flex justify-content-center bg-pry-light align-items-center">
					<div className="col-sm-8 col-lg-10">
						<Formik
							initialValues={{ email: "", password: "" }}
							validationSchema={Yup.object({
								email: Yup.string().email("Invalid email address").required("Required"),
								password: Yup.string().required("Enter your password"),
							})}
							onSubmit={(values, { setSubmitting }) => {
								console.log(values);
								onFinish(values);
								setSubmitting(false);
							}}
						>
							<Form>
								<div className="mb-3">
									<Field name="email" type="email" className="w-100 border-0 px-3 rounded py-1" placeholder="Email" />
									<br />
									<span className="text-danger">
										<ErrorMessage name="email" />
									</span>
								</div>

								<div className="mb-3">
									<Field
										name="password"
										type="password"
										className="w-100 border-0 px-3 rounded py-1"
										placeholder="Password"
									/>
									<br />
									<span className="text-danger">
										<ErrorMessage name="password" />
									</span>
								</div>

								<Link to="/login" className="login-form-forgot mb-2">
									Forgot password
								</Link>

								<button type="submit" className="login-form-button btn bg-pry text-white">
									Log in
								</button>
							</Form>
						</Formik>
						<p className="text-center">
							Don't have an account? <Link to="/signup">Sign up</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogInForm;
